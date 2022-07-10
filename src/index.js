const { readFile } = require('fs/promises');
const parseCsv = require('./parseCsv');
const genBiblatex = require('./genBiblatex');

function validateArgs() {
  if (process.argv.length < 3) {
    throw new Error('You must provide a location for the CSV file');
  }
}

function printUsage() {
  console.error('Usage: node [this script] <csvFileLocation>');
}

async function start() {
  validateArgs();
  const csvFileLocation = process.argv[2];
  const csvContents = await readFile(csvFileLocation, { encoding: 'utf-8' });
  const articles = await parseCsv(csvContents);
  console.log(genBiblatex(articles));
}

start().catch((err) => {
  console.error(err);
  printUsage();
  process.exit(1);
});
