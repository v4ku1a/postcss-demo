var gulp = require('gulp');
var postcss = require('gulp-postcss');

var nested = require('postcss-nested');

var lost = require('lost');

processors = [
	nested,
	lost
];


gulp.task('grid', function(){
	gulp.src('src/grid.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('build'));
});
