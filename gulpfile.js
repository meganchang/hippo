var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./less/index.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'));
});