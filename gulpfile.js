const gulp          = require('gulp'),
      requireDir    = require('require-dir'),
      browserSync   = require('browser-sync').create();

process.setMaxListeners(0);

global.paths = {
  src:    './src',
  index:  './src/index.html',
  html:   './src/**/*.html',
  scss:   './src/scss/**/*.scss',
  js:     './src/js/**/*.js',
  css:    './src/css',
  dist:   './dist',
};

global.browserSync = browserSync;

// Microscopic tasks that run independently
requireDir('./gulp-tasks/elemental', { recurse: false });

// Somewhat larger processes, like watching and compiling scss files
requireDir('./gulp-tasks/processes', { recurse: false });

// Workflows, like build/deploy/test/serve
requireDir('./gulp-tasks/workflows', { recurse: false });

gulp.task('default', gulp.series('serve'));