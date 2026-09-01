const fs = require("fs");
const path = require("path");
const {execFileSync} = require("child_process");

const repoRoot = path.resolve(__dirname, "..", "..");
const jobsRoot = path.join(__dirname, "jobs");
const defaultJobId = "viewer-net-v26.5-getting-started-es";
const stepOrder = ["importEnglish", "translate", "build", "searchIndex"];

function parseArgs(argv) {
  const options = {
    job: defaultJobId,
    status: false,
    dryRun: false,
    force: false,
    includeSearchIndex: false,
    step: ""
  };

  argv.forEach((arg) => {
    if (arg === "--status") {
      options.status = true;
      return;
    }
    if (arg === "--dry-run") {
      options.dryRun = true;
      return;
    }
    if (arg === "--force") {
      options.force = true;
      return;
    }
    if (arg === "--include-search-index") {
      options.includeSearchIndex = true;
      return;
    }
    if (arg.startsWith("--job=")) {
      options.job = arg.slice("--job=".length);
      return;
    }
    if (arg.startsWith("--step=")) {
      options.step = arg.slice("--step=".length);
    }
  });

  return options;
}

function jobPath(jobId) {
  return path.join(jobsRoot, `${jobId}.json`);
}

function readJob(jobId) {
  const file = jobPath(jobId);
  if (!fs.existsSync(file)) {
    throw new Error(`Job file not found: ${path.relative(repoRoot, file)}`);
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJob(job) {
  job.updatedAt = new Date().toISOString();
  if (!job.createdAt) {
    job.createdAt = job.updatedAt;
  }
  fs.writeFileSync(jobPath(job.id), `${JSON.stringify(job, null, 2)}\n`, "utf8");
}

function npmCommand() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}

function targetRepo(job) {
  return path.resolve(job.target.repoPath || repoRoot);
}

function sourceRepo(job) {
  return path.resolve(job.source.repoPath || job.source.path || "");
}

function sourceDocs(job) {
  const repo = sourceRepo(job);
  const docsPath = job.source.docsPath || "";
  return path.isAbsolute(docsPath) ? path.resolve(docsPath) : path.resolve(repo, docsPath);
}

function docsOwnerEnv(job) {
  const target = targetRepo(job);
  const source = sourceRepo(job);
  return {
    DOCS_OWNER_SOURCE_REPO: source,
    DOCS_OWNER_SOURCE_DOCS: sourceDocs(job),
    DOCS_OWNER_SOURCE_REPO_NAME: job.source.name || path.basename(source),
    DOCS_OWNER_TARGET_REPO: target,
    DOCS_OWNER_TARGET_DOCS_ROOT: job.target.docsRoot,
    DOCS_OWNER_TARGET_STATIC_ROOT: job.target.staticRoot || "",
    DOCS_OWNER_TARGET_LOCALE_ROOT_PATTERN: job.target.localeRootPattern,
    DOCS_OWNER_DOCS_URL_PREFIX:
      job.target.docsUrlPrefix ||
      `/${job.platform}/${job.product}/${job.version}`,
    DOCS_OWNER_DOC_ID_BASE:
      job.target.docIdBase ||
      job.target.docsRoot.replace(/\\/g, "/").replace(/^docs\//, ""),
    DOCS_OWNER_PRODUCT: job.product,
    DOCS_OWNER_PLATFORM: job.platform,
    DOCS_OWNER_VERSION: job.version,
    TRANSLATION_SOURCE_ROOT: job.target.docsRoot,
    TRANSLATION_TARGET_ROOT_PATTERN: job.target.localeRootPattern,
    DOCS_INDEX_ROOT: job.target.docsRoot
  };
}

function commandExecOptions(command) {
  return {
    cwd: command.cwd || repoRoot,
    encoding: "utf8",
    env: {...process.env, ...(command.env || {})},
    maxBuffer: 1024 * 1024 * 50,
    stdio: ["ignore", "pipe", "pipe"]
  };
}

function runCommand(command) {
  if (process.platform === "win32" && command.file.endsWith(".cmd")) {
    return execFileSync(
      "cmd.exe",
      ["/d", "/s", "/c", commandLineForCmd(command)],
      commandExecOptions(command)
    );
  }

  return execFileSync(command.file, command.args, commandExecOptions(command));
}

function commandLineForCmd(command) {
  return [command.file, ...command.args].map(quoteCmdPart).join(" ");
}

function quoteCmdPart(part) {
  if (!/[\s"&|<>^]/.test(part)) {
    return part;
  }
  return `"${part.replace(/"/g, '\\"')}"`;
}

function commandForStep(stepName, job, options) {
  const npm = npmCommand();
  const env = docsOwnerEnv(job);

  if (stepName === "importEnglish") {
    return [{file: npm, args: ["run", "import:viewer"], env}];
  }

  if (stepName === "translate") {
    return job.targetLocales.map((locale) => {
      const args = ["run", "translate:docs", "--", `--locale=${locale}`];
      if (options.force) {
        args.push("--force");
      }
      return {file: npm, args, env};
    });
  }

  if (stepName === "build") {
    return [{file: npm, args: ["run", "build"], cwd: targetRepo(job), env}];
  }

  if (stepName === "searchIndex") {
    return [{file: npm, args: ["run", "search:index"], env}];
  }

  throw new Error(`Unsupported job step: ${stepName}`);
}

function commandText(command) {
  return [command.file, ...command.args].join(" ");
}

function shouldRunStep(stepName, job, options) {
  if (options.step && options.step !== stepName) {
    return false;
  }

  const step = job.steps[stepName];
  if (!step) {
    return false;
  }

  if (stepName === "searchIndex" && !options.includeSearchIndex && !step.enabled) {
    return false;
  }

  return options.force || step.status !== "completed";
}

function outputTail(text) {
  if (!text) {
    return "";
  }
  return text.slice(-5000);
}

function runStep(stepName, job, options) {
  const step = job.steps[stepName];
  const commands = commandForStep(stepName, job, options);

  if (options.dryRun) {
    commands.forEach((command) => {
      console.log(`[dry-run] ${stepName}: ${commandText(command)}`);
    });
    return;
  }

  step.status = "running";
  step.startedAt = new Date().toISOString();
  step.completedAt = null;
  step.error = null;
  step.outputTail = "";
  step.command = commands.map(commandText).join(" && ");
  job.status = "running";
  writeJob(job);

  console.log(`Running ${stepName}: ${step.command}`);

  try {
    const output = commands
      .map((command) => runCommand(command))
      .join("\n");

    step.status = "completed";
    step.completedAt = new Date().toISOString();
    step.outputTail = outputTail(output);
    step.error = null;
    refreshFiles(job);
    writeJob(job);
    console.log(`Completed ${stepName}.`);
  } catch (error) {
    const output = `${error.stdout || ""}${error.stderr || ""}`;
    step.status = "failed";
    step.completedAt = new Date().toISOString();
    step.outputTail = outputTail(output);
    step.error = error.message;
    job.status = "failed";
    refreshFiles(job);
    writeJob(job);
    throw new Error(`${stepName} failed. See ${relativeJobPath(job)} for details.`);
  }
}

function relativeJobPath(job) {
  return path.relative(repoRoot, jobPath(job.id)).replace(/\\/g, "/");
}

function refreshFiles(job) {
  const target = targetRepo(job);
  const englishRoot = path.resolve(target, job.target.docsRoot);
  if (!fs.existsSync(englishRoot)) {
    job.files = [];
    return;
  }

  job.files = listFiles(englishRoot, ".mdx").map((file) => {
    const relative = path.relative(englishRoot, file).replace(/\\/g, "/");
    const english = readDocMetadata(file);
    const translations = {};

    job.targetLocales.forEach((locale) => {
      const localeFile = path.resolve(
        target,
        job.target.localeRootPattern.replace("{locale}", locale),
        relative
      );
      translations[locale] = fs.existsSync(localeFile)
        ? {
            status: "present",
            path: path.relative(target, localeFile).replace(/\\/g, "/"),
            ...translationMetadata(readDocMetadata(localeFile))
          }
        : {
            status: "missing",
            path: path.relative(target, localeFile).replace(/\\/g, "/")
          };
    });

    return {
      sourcePath: english.source_path || "",
      targetPath: path.relative(target, file).replace(/\\/g, "/"),
      sourceSha256: english.source_sha256 || "",
      translations
    };
  });
}

function translationMetadata(metadata) {
  return {
    translationStatus: metadata.translation_status || "",
    translationModel: metadata.translation_model || "",
    translationSourceSha256: metadata.translation_source_sha256 || "",
    translationUpdatedAt: metadata.translation_updated_at || ""
  };
}

function listFiles(dir, extension) {
  return fs
    .readdirSync(dir, {withFileTypes: true})
    .flatMap((entry) => {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listFiles(absolute, extension);
      }
      return entry.isFile() && entry.name.endsWith(extension) ? [absolute] : [];
    })
    .sort();
}

function readDocMetadata(file) {
  const text = fs.readFileSync(file, "utf8");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return {};
  }

  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const property = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!property) {
      return;
    }
    data[property[1]] = unquote(property[2].trim());
  });
  return data;
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function setFinalStatus(job, options) {
  const runnableSteps = stepOrder.filter((stepName) => {
    if (stepName === "searchIndex") {
      return options.includeSearchIndex || job.steps[stepName]?.enabled;
    }
    return Boolean(job.steps[stepName]);
  });

  if (runnableSteps.some((stepName) => job.steps[stepName].status === "failed")) {
    job.status = "failed";
    return;
  }

  if (runnableSteps.every((stepName) => job.steps[stepName].status === "completed")) {
    job.status = "completed";
    return;
  }

  job.status = "partial";
}

function printStatus(job) {
  refreshFiles(job);
  writeJob(job);

  console.log(`${job.id}: ${job.status}`);
  console.log(
    `${job.product}/${job.platform}/${job.version}/${job.section} -> ${job.targetLocales.join(
      ", "
    )}`
  );
  stepOrder.forEach((stepName) => {
    const step = job.steps[stepName];
    if (!step) {
      return;
    }
    const enabled =
      stepName === "searchIndex" && !step.enabled ? " (disabled)" : "";
    const completed = step.completedAt ? `, completed ${step.completedAt}` : "";
    console.log(`- ${stepName}: ${step.status}${enabled}${completed}`);
  });
  console.log(`Files tracked: ${job.files.length}`);
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const job = readJob(options.job);

  if (options.status) {
    printStatus(job);
    return;
  }

  if (options.step && !stepOrder.includes(options.step)) {
    throw new Error(`Unsupported --step value: ${options.step}`);
  }

  refreshFiles(job);
  writeJob(job);

  stepOrder.forEach((stepName) => {
    if (!shouldRunStep(stepName, job, options)) {
      return;
    }
    runStep(stepName, job, options);
  });

  if (!options.dryRun) {
    setFinalStatus(job, options);
    writeJob(job);
  }

  printStatus(job);
}

main();
