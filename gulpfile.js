var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function () {
	return gulp.src(['sass/**/*.sass', 'scss/**/*.scss'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //pipe - вызов плагина(функции), обработка
	.pipe(autoprefixer('last 16 version'))
	.pipe(gulp.dest('app/css/')) //путь выгрузки обработаного кода
});

// gulp.task('autoprefixer', function() {
// 	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
// 	.pipe(autoprefixer({
// 		browsers: ['last 16 versions'],
// 		cascade: false
// 	}))
// 	.pipe(gulp.dest('app/css'))
// });

// gulp.task('browser-sync', function () {
// 	browserSync({
// 		server: {
// 			baseDir: 'app'
// 			},
// 			notify: false,
// 			port: 8080,
// 			//browser: ["google chrome", "safari"],
// 			//open: false
// 			open: 'local'
// 		});
// });

gulp.task('watch', ['scss'], function () {
	gulp.watch(['sass/**/*.sass', 'scss/**/*.scss'], ['scss']);
});