const gulp = require('gulp');

gulp.task('serve', gulp.series('css', 'watch'));