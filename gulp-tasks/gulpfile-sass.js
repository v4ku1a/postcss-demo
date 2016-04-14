var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpAutoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var combineMq = require('gulp-combine-mq');


var sassOptions = {
	outputStyle: 'expanded'
};
var autoPrefOptions = {
	// browsers: ['last 2 versions']
};


gulp.task('sass', function () {
    gulp.src('src/*.scss')
        .pipe(sass(sassOptions))
        .pipe(gulpAutoprefixer(autoPrefOptions))
        // .pipe(cssnano())
        .pipe(combineMq())
        .pipe(gulp.dest('build'));
});
