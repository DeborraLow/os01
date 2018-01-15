var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    nunjucksRender = require('gulp-nunjucks-render'),
    data = require('gulp-data');


gulp.task('nunjucks', function() {
  return gulp.src('src/views/pages/*.+(html|njk)')
  .pipe(data(function() {
      return require('./src/views/data/data.json')
    }))
  .pipe(nunjucksRender({
      path: ['src/views/templates/']
    }))
  .pipe(gulp.dest('public'))
});


gulp.task('css', function() {
    return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('public/assets/css'))
    .pipe(cssnano())
    .pipe(gulp.dest('public/assets/css'))
});


gulp.task('js', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/assets/js'))
});


gulp.task('img', function() {
   gulp.src('src/img/**/*')
   .pipe(gulp.dest('public/assets/img'));
});



gulp.task('default', ['css', 'js', 'nunjucks', 'img'], function () {
    gulp.watch("src/scss/**/*.scss", ['css']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/img/*", ['img']);
    gulp.watch("src/views/**/*.njk", ['nunjucks']);
});
