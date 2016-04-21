var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();
var del = require('del');

var tasks = requireDir('./gulp-tasks');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ["./*.html", "./build/*.css"]
    });
});

gulp.task('clean', function() {
	del(['build/*.css']);
});


