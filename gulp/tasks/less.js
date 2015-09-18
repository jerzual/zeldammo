var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var config = require('../config');

gulp.task('less', function() {
    gulp.src(config.src+'less/*.less')
        .pipe(less())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(connect.reload());
});