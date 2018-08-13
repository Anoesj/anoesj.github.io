const { src, task } = require('gulp'),
      ghPages       = require('gulp-gh-pages');

task('deploy', () => {
  src('./dist/**/*')
    .pipe(ghPages());
});