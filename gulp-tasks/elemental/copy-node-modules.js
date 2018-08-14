const gulp = require('gulp'),
      fs = require('fs').promises;

gulp.task('copy-node-modules', async done => {
  const filesToCopy = new Map([
          ['node_modules/vue/dist/vue.esm.browser.js', 'vue.js'],
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