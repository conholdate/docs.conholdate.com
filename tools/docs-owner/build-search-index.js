const {QdrantClient} = require("@qdrant/js-client-rest");
const {
  getSearchConfig,
  requireSearchConfig
} = require("./search-config");
const {chunksFromMdxFile, embedTexts, listFiles} = require("./search-utils");

async function ensureCollection(client, config) {
  try {
    await client.getCollection(config.qdrantCollection);
    return;
  } catch {
    await client.createCollection(config.qdrantCollection, {
      vectors: {
        size: config.qdrantVectorSize,
        distance: "Cosine"
      }
    });
  }
}

function toBatches(items, batchSize) {
  const batches = [];
  for (let index = 0; index < items.length; index += batchSize) {
    batches.push(items.slice(index, index + batchSize));
  }
  return batches;
}

function searchableFiles(config) {
  return config.docsIndexRoots.flatMap((rootConfig) => {
    const files = listFiles(rootConfig.root, ".mdx");
    return files.map((file) => ({
      file,
      rootConfig: {
        ...rootConfig,
        targetRepo: config.targetRepo
      }
    }));
  });
}

function chunkSummary(chunks) {
  return chunks.reduce((summary, chunk) => {
    const payload = chunk.payload;
    const key = [
      payload.locale,
      payload.platform,
      payload.totalVersion,
      payload.product,
      payload.section
    ].join(" / ");
    summary.set(key, (summary.get(key) || 0) + 1);
    return summary;
  }, new Map());
}

async function run() {
  const dryRun = process.argv.includes("--dry-run");
  const config = getSearchConfig();

  const files = searchableFiles(config);
  const chunks = files.flatMap(({file, rootConfig}) =>
    chunksFromMdxFile(file, rootConfig, config.docsSiteBaseUrl)
  );

  if (!chunks.length) {
    throw new Error("No searchable chunks found in configured docs roots.");
  }

  if (dryRun) {
    console.log(`Docs roots: ${config.docsIndexRoots.length}`);
    config.docsIndexRoots.forEach((rootConfig, index) => {
      console.log(
        `${index + 1}. ${rootConfig.locale || "-"} / ` +
          `${rootConfig.platform || "-"} / ` +
          `${rootConfig.totalVersion || "-"} -> ${rootConfig.root}`
      );
    });
    console.log(`Files: ${files.length}`);
    console.log(`Chunks: ${chunks.length}`);
    console.log("\nChunks by locale / platform / Total version / product / section:");
    Array.from(chunkSummary(chunks))
      .sort(([left], [right]) => left.localeCompare(right))
      .forEach(([key, count]) => {
        console.log(`- ${key}: ${count}`);
      });
    chunks.slice(0, 5).forEach((chunk, index) => {
      console.log(`\n${index + 1}. ${chunk.payload.heading_path}`);
      console.log(`   ${chunk.payload.url}`);
      console.log(
        `   ${chunk.payload.locale} / ${chunk.payload.platform} / ` +
          `${chunk.payload.totalVersion} / ${chunk.payload.product} / ` +
          `${chunk.payload.section}`
      );
      console.log(`   ${chunk.text.slice(0, 220).replace(/\s+/g, " ")}...`);
    });
    return;
  }

  requireSearchConfig(config);

  const client = new QdrantClient({
    url: config.qdrantUrl,
    checkCompatibility: false
  });
  await ensureCollection(client, config);

  let indexed = 0;
  for (const batch of toBatches(chunks, config.embeddingBatchSize)) {
    const vectors = await embedTexts(
      batch.map((chunk) => chunk.text),
      config
    );
    const points = batch.map((chunk, index) => ({
      id: chunk.id,
      vector: vectors[index],
      payload: chunk.payload
    }));

    await client.upsert(config.qdrantCollection, {
      wait: true,
      points
    });
    indexed += points.length;
    console.log(`Indexed ${indexed}/${chunks.length} chunks`);
  }

  console.log(
    `Search index ready: ${config.qdrantCollection} (${indexed} chunks)`
  );
}

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
