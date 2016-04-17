var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var colorRgbaFallback = require("postcss-color-rgba-fallback");

var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

var nested = require('postcss-nested');
var fontMagician = require('postcss-font-magician');


var processors = [
	autoprefixer({/*browsers: ['last 2 versions']*/}),
	colorRgbaFallback,
	atImport,
	// cssnano,
	nested,
	mqpacker,
	fontMagician
];


gulp.task('post', function () {
    gulp.src('src/post.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});
