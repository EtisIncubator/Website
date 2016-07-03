var babelify = require('babelify')
var glob = require('glob')
var browserify = require('browserify')
var buffer = require('vinyl-buffer')
var gulp = require('gulp')
var riotify = require('riotify')
var source = require('vinyl-source-stream')
var cleanCSS = require('gulp-clean-css')
var myth = require('gulp-myth')
var concatCss = require('gulp-concat-css')

gulp.task('default', function () {
		var b = browserify()
		b.add('js/main.js')
		b.transform(babelify)
		b.transform(riotify)
		b.transform({global: true}, 'uglifyify')
		b.bundle()
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(gulp.dest('compiled/'))
		return b
});
gulp.task('css', function () {
  return gulp.src('css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(myth())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('compiled'));
});
