const parseCsv = require('./parseCsv');

describe('parseCsv', () => {
  it('should parse a csv file into an array of authors', async () => {
    const csv = `The Title of the Article; J Doe, S Omeone, A Author;International Conference on Military Technologies;ICMT;2021\nThe Title of Another Article;J Donaldson;International Conference on Military Technologies;ICMT;2020`;
    const articles = await parseCsv(csv);

    expect(articles).toHaveLength(2);
    expect(articles[0].title).toBe('The Title of the Article');
    expect(articles[0].authors).toHaveLength(3);
    expect(articles[0].authors[0]).toBe('J Doe');
    expect(articles[0].authors[1]).toBe('S Omeone');
    expect(articles[0].authors[2]).toBe('A Author');
    expect(articles[0].journal).toBe(
      'International Conference on Military Technologies'
    );
    expect(articles[0].year).toBe('2021');

    expect(articles[1].title).toBe('The Title of Another Article');
    expect(articles[1].authors).toHaveLength(1);
    expect(articles[1].authors[0]).toBe('J Donaldson');
    expect(articles[1].journal).toBe(
      'International Conference on Military Technologies'
    );
    expect(articles[1].year).toBe('2020');
  });
});
