var gulp        = require('gulp'), // Подключаем Gulp // Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false //отключаем уведомления
	});
});

gulp.task('watch', ['browser-sync'], function(){
	gulp.watch('app/**/*.html', browserSync.reload);  //livereload для всех файлов.html находящихся в папках и подпапках
	gulp.watch('app/js/**/*.js', browserSync.reload); //livereload для всех файлов.js находящихся в папках и подпапках
});
gulp.task('default', ['watch','browser-sync']);
