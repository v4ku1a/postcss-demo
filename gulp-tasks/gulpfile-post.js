var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');

var processors = [
	autoprefixer({browsers: ['last 4 versions']})
];



gulp.task('post', function () {
    gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});
