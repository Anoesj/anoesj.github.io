const gulp = require('gulp'),
      url = require('url'),
      fs = require('fs'),
      path = require('path');

// The default file if the file/path is not found
const defaultFile = 'index.html';

// I had to resolve to the previous folder, because this task lives inside a ./tasks folder
// If that's not your case, just use `__dirname`
const srcFolder = path.resolve(__dirname, '../../src');

gulp.task('watch', () => {
  global.browserSync.init({
    server: [global.paths.src],
    ghostMode: false,
    middleware: function(req, res, next) {
      // Let Vue router handle routing client-side
      const parsedURL = url.parse(req.url),
            fileName = parsedURL.href.slice(1).split(parsedURL.search).join(''),
            fileExists = fs.existsSync(`${srcFolder}/${fileName}`);

      if (!fileExists && !fileName.includes('browser-sync-client')) {
        req.url = `/${defaultFile}`;
      }

      return next();
    }
  });

  const interval = { interval: 300 };
  gulp.watch(global.paths.html, interval).on('change', global.browserSync.reload);
  gulp.watch(global.paths.js, interval).on('change', global.browserSync.reload);
  gulp.watch(global.paths.scss, interval, gulp.series('css'));
});