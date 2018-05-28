var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './app'
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('images', function() {
  gulp
    .src('app/assets/images/*')
    .pipe(
      cache(
        imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
      )
    )
    .pipe(gulp.dest('app/assets/images/'));
});

gulp.task('styles', function() {
  gulp
    .src(['app/styles/**/*.scss', 'app/styles/**/*.sass'])
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('app/styles/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('app/styles/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts', function() {
  return gulp
    .src('app/scripts/*.js')
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/scripts/dist/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('app/scripts/dist/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('app/styles/**/*.scss', ['styles', 'bs-reload']);
  gulp.watch('app/styles/**/*.sass', ['styles', 'bs-reload']);
  gulp.watch('app/scripts/*.js', ['scripts', 'bs-reload']);
  gulp.watch('app/*.html', ['bs-reload']);
});

gulp.task('watch', function() {
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/styles/**/*.sass', ['styles', 'bs-reload']);
  gulp.watch('app/scripts/*.js', ['scripts']);
  gulp.watch('app/*.html');
});
