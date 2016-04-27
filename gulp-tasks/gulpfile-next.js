var gulp = require('gulp');
var postcss = require('gulp-postcss');

// var autoprefixer = require('autoprefixer');  ENABLE THIS !!!!!

var fontMagician = require('postcss-font-magician');
var atImport = require('postcss-import');

// var cssnext = require('postcss-cssnext');
var level4 = require('level4');


var processors = [
    // autoprefixer({browsers: ['last 2 versions']}),
    atImport,
    // cssnext,
    level4,
    fontMagician
];


gulp.task('next', function () {
    gulp.src(['src/next.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});



