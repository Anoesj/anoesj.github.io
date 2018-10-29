const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      sassGlob = require('gulp-sass-glob');

gulp.task('css', function () {
  return gulp.src(global.paths.scss)
    .pipe(sassGlob())
    .pipe(sass())
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(autoprefixer())
    .pipe(gulp.dest(global.paths.css))
    .pipe(global.browserSync.stream());
});