const fs = require("fs").promises;
const path = require("path");
const { execSync } = require("child_process");

const commit_hash = execSync("git rev-parse --short HEAD").toString().trim();

const sourceFiles = [
  "src/evergarden-winter.theme.scss",
  "src/evergarden-fall.theme.scss",
  "src/evergarden-spring.theme.scss",
  "src/evergarden-summer.theme.scss",
];

const accents = [
  "red",
  "orange",
  "yellow",
  "green",
  "aqua",
  "skye",
  "blue",
  "purple",
  "pink",
];

(async () => {
  await Promise.all(sourceFiles.map(generateAccents));
  console.log("Generated all accents for all flavours");
})();

// read sourceFile and generate all accents for it
async function generateAccents(sourceFilePath) {
  const _sourceFilePath = path.join(__dirname, sourceFilePath);
  const sourceFileData = (
    await fs.readFile(_sourceFilePath, {
      encoding: "utf8",
    })
  ).replace(/\$dcommit: .*;/gm, `$dcommit: "(${commit_hash})";`);
  let tasks = accents.map((accent) =>
    generateAccent(sourceFileData, sourceFilePath, accent)
  );
  tasks.push(
    (async () => {
      const outputFileName = sourceFilePath;
      const outputFilePath = path.join(__dirname, outputFileName);
      await fs.writeFile(outputFilePath, sourceFileData);
      console.log(`Generated: ${outputFileName}`);
    })()
  );
  return Promise.all(tasks);
}

// replace brand and write to separate file
async function generateAccent(sourceFileData, sourceFilePath, accent) {
  const modifiedFileContent = sourceFileData.replace(
    /\$brand: .*;/gm,
    `$brand: \$${accent};`
  );
  const outputFileName = sourceFilePath
    .split(".")
    .map((s, i) => (i === 0 ? s.concat(`-${accent}`) : s))
    .join(".");
  const outputFilePath = path.join(__dirname, outputFileName);
  await fs.writeFile(outputFilePath, modifiedFileContent);
  console.log(`Generated: ${outputFileName}`);
}
