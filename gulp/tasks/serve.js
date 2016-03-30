var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config');

gulp.task('serve', function() {
    connect.server({
        root:'./public',
        livereload: true
    });
});