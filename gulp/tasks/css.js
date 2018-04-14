'use strict';

module.exports = function() {
  $.gulp.task('copy:css', function() {
    return $.gulp.src('./source/css/**/*.*', { since: $.gulp.lastRun('copy:css') }) 
      .pipe($.gulp.dest($.config.root + '/assets/css')); // путь к итоговой папке
  });
};