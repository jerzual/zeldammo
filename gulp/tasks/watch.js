const gulp = require('gulp');
const config = require('../config');

gulp.task('watch', function() {
    gulp.watch([config.src + '/less/*.less'], ['less']);
    gulp.watch([config.src + '/js/**/*.js'], ['browserify']);
        gulp.watch([config.src + '/styles/*.scss'], ['sass']);
        gulp.watch([config.src + '/js/**/*.js'], ['rollup']);
});
