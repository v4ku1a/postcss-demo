var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var colorRgbaFallback = require('postcss-color-rgba-fallback');
var opacityFallback = require('postcss-opacity')

var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

var nested = require('postcss-nested');
var simpleVars = require('postcss-simple-vars');

var fontMagician = require('postcss-font-magician');

var cssnext = require('postcss-cssnext');

var ruStyles = require('postcss-russian-stylesheets');
var lolCat = require('lolcat-css-values');


var processors = [
    ruStyles,
    // lolCat,
    autoprefixer({browsers: ['last 2 versions']}),
    colorRgbaFallback,
    opacityFallback,
    atImport,
    nested,
    mqpacker,
    simpleVars,
    fontMagician
];



gulp.task('fun', function () {
    gulp.src(['src/fun.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});











