const gulp = require('gulp');

gulp.task('watch', () => {
  global.browserSync.init({
    server: [global.paths.src],
    ghostMode: false
  });

  const interval = { interval: 300 };
  gulp.watch(global.paths.html, interval).on('change', global.browserSync.reload);
  gulp.watch(global.paths.scss, interval, gulp.series('css'));
});