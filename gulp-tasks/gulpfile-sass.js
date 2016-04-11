var gulp = require('gulp');
var sass = require('gulp-sass');

var sassOptions = {
	outputStyle: 'expanded',
	syntax: 'scss'
}

gulp.task('sass', function () {
    gulp.src('src/styles.scss')
        .pipe(sass(sassOptions))
        .pipe(gulp.dest('build'));
});
