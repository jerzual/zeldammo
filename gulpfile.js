var gulp = require('gulp');
var requireDir = require('require-dir');

//full tasks are defined in ./gulp/tasks/*.js individual files.
requireDir('./gulp/tasks/');

//only composite tasks here
gulp.task('build', ['less', 'browserify']);
gulp.task('default',['build','serve','watch']);

