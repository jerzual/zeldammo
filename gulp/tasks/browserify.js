'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var config = require('../config');
var connect = require('gulp-connect');


gulp.task('javascript', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: 'zelda.min.js',
        debug: true
    });

    return b.bundle()
        .pipe(source(config.src+'/js/zelda.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write(config.dest+'/js/'))
        .pipe(gulp.dest(config.dest+'/js/'))
        .pipe(connect.reload());
});