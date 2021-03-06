const gulp = require('gulp');
const connect = require('gulp-connect');
const less = require('gulp-less');
const config = require('../config');

gulp.task('less', () => {
    gulp.src(config.src+'less/*.less')
        .pipe(less())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(connect.reload());
});
