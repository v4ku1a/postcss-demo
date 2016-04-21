var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

var tasks = requireDir('./gulp-tasks');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ["./index.html", "./build/*.css"]
    });
});

gulp.task('clean', function() {
	del(['build/*.css']);
});
