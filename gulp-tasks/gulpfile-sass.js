var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpAutoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var cleanCSS = require('gulp-clean-css'); 
var combineMq = require('gulp-combine-mq');


var sassOptions = {
	outputStyle: 'expanded'
};
var autoPrefOptions = {
	// browsers: ['last 2 versions']
};


gulp.task('sass', function () {
    gulp.src('src/sass.scss')
        .pipe(sass(sassOptions))
        .pipe(gulpAutoprefixer(autoPrefOptions))
        .pipe(combineMq())
        // .pipe(cssnano())
        // .pipe(cleanCSS({keepBreaks: false}))
        .pipe(gulp.dest('build'));
});
