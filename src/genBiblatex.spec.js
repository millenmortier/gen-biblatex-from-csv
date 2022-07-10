const genBiblatex = require('./genBiblatex');

describe('genBiblatex', () => {
  it('should generate biblatex for an article object', () => {
    const article = {
      title: 'Title of an Article',
      authors: ['A Author', 'J Doe'],
      journal: 'The Institute of Engineering and Technology',
      year: '2021',
    };

    const bibLatex = genBiblatex([article]);

    expect(bibLatex).toContain(`@article{author2021,`);
    expect(bibLatex).toContain(`title = {{${article.title}}},`);
    expect(bibLatex).toContain(`author = {${article.authors.join(', ')}},`);
    expect(bibLatex).toContain(`journal = {${article.journal}},`);
    expect(bibLatex).toContain(`year = ${article.year}`);
  });
});
