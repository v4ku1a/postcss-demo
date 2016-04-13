var gulp = require('gulp');
var sass = require('gulp-sass');

var sassOptions = {
	outputStyle: 'expanded'
}

gulp.task('sass', function () {
    gulp.src('src/*.scss')
        .pipe(sass(sassOptions))
        .pipe(gulp.dest('build'));
});
