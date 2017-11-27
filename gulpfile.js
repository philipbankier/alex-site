var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var header = require('gulp-header');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.name %> v<%= pkg.version %> \n',
  ' * Copyright 2017-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' */\n',
  ''
].join('');

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
    open: false
  })
})

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'nodemon'], function() {

  // Reloads the browser whenever HTML or JS files change
  gulp.watch('public/**/*.*', browserSync.reload);
});