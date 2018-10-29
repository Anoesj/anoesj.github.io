const gulp = require('gulp'),
      fs = require('fs').promises;

gulp.task('copy-node-modules', async done => {
  const filesToCopy = new Map([
          ['node_modules/vue/dist/vue.esm.browser.js', 'vue.mjs'],
          ['node_modules/vue-router/dist/vue-router.esm.js', 'vue-router.mjs'],
        ]),
        copyTasks = [];

  try {
    for (const [originalFilePath, targetFileName] of filesToCopy.entries()) {
      copyTasks.push(fs.copyFile(originalFilePath, `src/js/lib/${targetFileName}`));
    }

    await Promise.all(copyTasks);
  }

  catch (e) {
    console.warn(e);
  }

  done();
});