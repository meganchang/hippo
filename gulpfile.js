var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./client/less/index.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function () {
	gulp.src('./client/js/**/*.js')
	.pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['less', 'js']);