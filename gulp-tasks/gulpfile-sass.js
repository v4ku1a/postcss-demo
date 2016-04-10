var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('src/styles-sass.sass')
        .pipe(sass())
        .pipe(gulp.dest('build'));
});
