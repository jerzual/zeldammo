'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var config = require('../config');
var connect = require('gulp-connect');
var assign = require('lodash').assign;

// set up the browserify instance on a task basis
const browserifyOptions = {
    entries: [config.src + '/js/zelda.js'],
    debug: true
};
const opts = assign({}, watchify.args, browserifyOptions);
const bro = watchify(browserify(opts));

gulp.task('browserify', ()=>{
      return bro
          .transform('browserify-shim')
          .transform('browserify-handlebars')
          .transform(babelify)
          .bundle()
          // log errors if they happen
          .on('error', gutil.log.bind(gutil, 'Browserify Error'))
          .pipe(source('zelda.min.js'))
          // optional, remove if you don't need to buffer file contents
          .pipe(buffer())
          // optional, remove if you dont want sourcemaps
          .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
          // Add transformation tasks to the pipeline here.
          .pipe(uglify())
          .pipe(sourcemaps.write('./')) // writes .map file
          .pipe(gulp.dest(config.dest+'/js/'));
});
//bro.on('update', bundle); // on any dep update, runs the bundler
bro.on('log', gutil.log); // output build logs to terminal
