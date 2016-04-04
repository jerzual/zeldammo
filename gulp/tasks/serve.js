const gulp = require('gulp');
const connect = require('gulp-connect');
const config = require('../config');

gulp.task('serve', function() {
    connect.server({
        root:'./public',
        livereload: true
    });
});
