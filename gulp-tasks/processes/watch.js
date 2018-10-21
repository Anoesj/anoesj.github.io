const gulp = require('gulp'),
      url = require('url'),
      fs = require('fs'),
      path = require('path');

// The default file if the file/path is not found
const defaultFile = 'index.html';

// I had to resolve to the previous folder, because this task lives inside a ./tasks folder
// If that's not your case, just use `__dirname`
const folder = path.resolve(__dirname, '../');

gulp.task('watch', () => {
  global.browserSync.init({
    server: [global.paths.src],
    ghostMode: false,
    // middleware: function(req, res, next) {
    //   let fileName = url.parse(req.url);
    //   fileName = fileName.href.split(fileName.search).join('');

    //   const fileExists = fs.existsSync(folder + fileName);
    //   if (!fileExists && fileName.indexOf('browser-sync-client') < 0) {
    //     req.url = '/' + defaultFile;
    //   }
    //   return next();
    // }
  });

  const interval = { interval: 300 };
  gulp.watch(global.paths.html, interval).on('change', global.browserSync.reload);
  gulp.watch(global.paths.scss, interval, gulp.series('css'));
});