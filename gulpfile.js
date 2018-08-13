const gulp          = require('gulp'),
      requireDir    = require('require-dir'),
      browserSync   = require('browser-sync').create();

process.setMaxListeners(0);

global.paths = {
  src: './src',
  index: './src/index.html',
  html: './src/**/*.html',
  scss: './src/scss/**/*.scss',
  css: './src/css',
  dist: './dist',
};

global.browserSync = browserSync;

requireDir('./gulp-tasks/elemental', { recurse: false });
requireDir('./gulp-tasks/processes', { recurse: false });
requireDir('./gulp-tasks/workflows', { recurse: false });

gulp.task('default', gulp.series('serve'));