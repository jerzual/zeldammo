const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const config = require('../config');
const connect = require('gulp-connect');
const assign = require('lodash').assign;

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
