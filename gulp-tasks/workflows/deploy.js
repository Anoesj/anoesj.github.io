const { src, task } = require('gulp'),
      ghPages       = require('gulp-gh-pages');

task('deploy', () => {
  return src('./src/**/*')
    .pipe(ghPages({
      branch: 'master',
    }));
});