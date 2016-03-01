var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  livereload = require('gulp-livereload'),
  changed = require('gulp-changed'),
  del = require('del');

// CSS
gulp.task('styles', function() {
  return gulp.src('src/assets/scss/*.scss')
  	.pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./target/assets/css/'))
    .pipe(rename({suffix: '.min'} ))
    .pipe(minifycss())
    .pipe(gulp.dest('./target/assets/css/'))
    .pipe(livereload())
});

// Js
gulp.task('scripts', function() {
  return gulp.src('src/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./target/assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./target/assets/js/'))
});

// Copy files
gulp.task('copy', function () {
  gulp.src('./src/**/*.{html,jpg,png,gif,jpeg}')
    .pipe(changed('target'))
    .pipe(gulp.dest('target'))
    .pipe(livereload());
});

// Watch
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/assets/scss/*.scss', ['styles']);
  gulp.watch('src/assets/js/*.js', ['scripts'])
  gulp.watch("./src/**/*.{html,png,jpeg,jpg}", ['copy']);
});

// Clean
gulp.task('clean', function (cb) {
  del(['target/*'], cb);
});

// Default task
gulp.task('dev', ['clean'], function () {
  gulp.start('styles', 'scripts', 'copy', 'watch');
});


// gulp.task('default', function() {
//   // place code for your default task here
// });