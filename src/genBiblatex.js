/**
 * Split the string by spaces, and return the last segment that's longer than
 * two characters
 *
 * @param {string} authorString
 */
function getLastName(authorString) {
  const segments = authorString.split(' ');
  let lastName = '',
    segment = '';
  for (let i = segments.length - 1; i >= 0; i--) {
    segment = segments[i];
    if (segment.length > 2) {
      lastName = segment;
      break;
    }
  }
  if (!lastName) {
    lastName = segments[0];
  }
  return lastName;
}

function generateArticleLabel(article, previousIds) {
  const lastName = getLastName(article.authors[0]);
  const idBase = `${lastName.toLowerCase()}${article.year}`;
  let modifier = 1;
  const makeId = (base, modifier) =>
    modifier > 1 ? `${base}_${modifier}` : base;
  while (previousIds.includes(makeId(idBase, modifier))) {
    modifier++;
  }
  return makeId(idBase, modifier);
}

module.exports = function genBiblatex(articles) {
  const previousIds = [];
  return articles
    .map((article) => {
      const articleId = generateArticleLabel(article, previousIds);
      previousIds.push(articleId);
      return `@article{${articleId},\n\ttitle = {{${
        article.title
      }}},\n\tauthor = {${article.authors.join(', ')}},\n\tjournal = {${
        article.journal
      }},\n\tyear = ${article.year}\n}\n`;
    })
    .join('\n');
};
