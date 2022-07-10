const { parse } = require('csv-parse');

function parsePromise(csvContents, opts) {
  return new Promise((resolve, reject) => {
    parse(csvContents, opts, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * Parses the CSV file with the contents for the Biblatex, and returns an array
 * of Article objects
 */
module.exports = async function parseCsv(csvContents) {
  const data = await parsePromise(csvContents, { delimiter: ';' });
  return data.map((row) => ({
    title: row[0],
    authors: row[1].split(',').map((author) => author.trim()),
    journal: row[2],
    year: row[4],
  }));
};
