const gulp = require('gulp');

gulp.task('serve', gulp.parallel('copy-node-modules', gulp.series('css', 'watch')));