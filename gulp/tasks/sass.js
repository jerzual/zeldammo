const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const config = require('../config');

gulp.task('sass', () => {
    gulp.src(config.src+'styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(connect.reload());
});
