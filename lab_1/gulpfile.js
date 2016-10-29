// Various helper modules
var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var	livereload = require('gulp-livereload')
var plug = require("gulp-load-plugins")();
var source = [
		'app/**/*.js', 
		"!app/web/libs/*.*"
	];

gulp.task('webserver', function() {
	return gulp
		.src('app')										// root
		.pipe(plug.webserver({
			livereload: true,							// livereload
			directoryListing: true,
			open: "http://localhost:8000/index.html"	// index.html
	}));
});
gulp.task('default', function () {
	return gulp.src('app/css/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css'));
});
gulp.task('sass', function() {
return gulp.src('app/sass/**/*.scss') 
.pipe(sass())
.pipe(gulp.dest('app/css'))
});
gulp.task('styles', function() {
    function transformFilepath(filepath) {
        return '@import "' + filepath + '";';
    }});
gulp.task("watch", function() {
	return gulp
		.watch(source)
		.on("change", function(event) {
			console.log("*** File " + event.path + " was " + event.type + ", running tasks...");
		});
});
gulp.watch('app/sass/**/*.scss', ['sass']);

// The default task is 'webserver'
gulp.task("default", ["webserver", "watch"]);