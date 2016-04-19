var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var colorRgbaFallback = require("postcss-color-rgba-fallback");

var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

var nested = require('postcss-nested');
var cssVariables = require('postcss-css-variables');
var fontMagician = require('postcss-font-magician');

var bem = require('postcss-bem');


var processors = [
	autoprefixer({/*browsers: ['last 2 versions']*/}),
	colorRgbaFallback,
	atImport,
	// cssnano,
	nested,
	mqpacker,
	cssVariables,
	fontMagician,
	bem({
		style:'bem',
		separators: {
        	modifier: '--'
    	},
		shortcuts: {
        	component: 'block',
        	descendent: 'element'
    	}
	})
];


gulp.task('post', function () {
    gulp.src(['src/post.css', 'src/post-bem.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});
