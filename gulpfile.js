var gulp = require('gulp');
var requireDir = require('require-dir');

var tasks = requireDir('./gulp-tasks');

gulp.task('default', [/*'post', */'sass'], function () {
    gulp.watch('src/**/*.{sass,css}', [/*'post', */'sass']);
});