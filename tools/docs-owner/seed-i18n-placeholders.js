const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const sourceDocsRoot = path.join(repoRoot, "docs");
const locales = ["es", "fr", "de"];

function copyDirectory(source, target) {
  fs.mkdirSync(target, {recursive: true});

  fs.readdirSync(source, {withFileTypes: true}).forEach((entry) => {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
      return;
    }

    if (entry.isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

function run() {
  if (!fs.existsSync(sourceDocsRoot)) {
    throw new Error(`Default docs folder does not exist: ${sourceDocsRoot}`);
  }

  locales.forEach((locale) => {
    const targetDocsRoot = path.join(
      repoRoot,
      "i18n",
      locale,
      "docusaurus-plugin-content-docs",
      "current"
    );

    fs.rmSync(targetDocsRoot, {recursive: true, force: true});
    copyDirectory(sourceDocsRoot, targetDocsRoot);

    console.log(
      `Seeded ${locale} placeholder docs: ${path.relative(
        repoRoot,
        targetDocsRoot
      )}`
    );
  });
}

run();
