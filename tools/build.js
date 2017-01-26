// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading) doesn't apply.

console.log(colors.blue('Generating minified bundle for production via Webpack. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(colors.red.bold(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(colors.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(colors.yellow.bold('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(colors.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(colors.green('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'));

  return 0;
});
