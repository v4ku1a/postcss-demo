var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var colorRgbaFallback = require('postcss-color-rgba-fallback');
var opacityFallback = require('postcss-opacity')

var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

var nested = require('postcss-nested');
var cssVariables = require('postcss-css-variables');
var simpleVars = require('postcss-simple-vars');
var fontMagician = require('postcss-font-magician');

var cssnext = require('postcss-cssnext');

var bem = require('postcss-bem');


var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    colorRgbaFallback,
    opacityFallback,
    atImport,
    // cssnano,
    nested,
    mqpacker,
    cssVariables,
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

// shuffle(processors);

gulp.task('post', function () {
    gulp.src(['src/post.css', 'src/post-bem.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});









function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
