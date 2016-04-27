var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var colorRgbaFallback = require('postcss-color-rgba-fallback');

var atImport = require('postcss-import');

var simpleVars = require('postcss-simple-vars');
var fontMagician = require('postcss-font-magician');

var bem = require('postcss-bem');


var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    colorRgbaFallback,
    atImport,
    simpleVars,
    fontMagician,
	bem({
		style:'bem',
		separators: {
        	modifier: ':'
    	},
		shortcuts: {
        	component: 'block',
        	descendent: 'element'
    	}
	})
];



gulp.task('bem', function () {
    gulp.src(['src/bem.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});

