var gulp = require('gulp');
var postcss = require('gulp-postcss');

// var autoprefixer = require('autoprefixer');

var cssnano = require('cssnano');

var fontMagician = require('postcss-font-magician');
var atImport = require('postcss-import');

var cssnext = require('postcss-cssnext');


var processors = [
    // autoprefixer({browsers: ['last 2 versions']}),
    // cssnano,
    atImport,
    cssnext,
    fontMagician
];


gulp.task('next', function () {
    gulp.src(['src/next.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});



