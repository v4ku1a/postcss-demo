var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

var tasks = requireDir('./gulp-tasks');

gulp.task('default', ['post', 'sass'], function () {
    gulp.watch('src/**/*.{scss,css}', ['post', 'sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ["./index.html", "./build/*.css"]
    });
});

