var gulp = require('gulp');


gulp.task('post', function () {
    gulp.src('src/*.css')
        // .pipe()
        .pipe(gulp.dest('build'));
});
