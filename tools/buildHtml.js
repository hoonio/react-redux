// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.access('dist', fs.constants.W_OK, (err) => {
  if (err) {
    fs.mkdir('dist', () => { console.log('Creating dist folder') });
  }
});

fs.readFile('app/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
  // $('head').append('<link rel="stylesheet" href="styles.css">');

  return () => {
    fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
      if (err) {
        return console.log(err);
      }
      return console.log(colors.green('index.html written to /dist'));
    });
  };
});

fs.readFile('app/helpage.html', 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }

  return () => {
    fs.writeFile('dist/helpage.html', 'utf8', (err) => {
      if (err) {
        return console.log(err);
      }
      return console.log('helpage.html written to /dist'.green);
    });
  };
});
