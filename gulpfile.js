// Require dependencies
var gulp = require("gulp"),
browserSync = require('browser-sync').create();
sass = require("gulp-sass");
concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');
var strip = require('gulp-strip-comments');





/*------------------------------------*\
  #COMBINED COMMANDS
\*------------------------------------*/

// Serve
gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/styles/**/*.scss", ['sass']);
  gulp.watch("app/scripts/*.js", ['concat']).on('change', browserSync.reload);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});


// Watch
gulp.task('watch', ['sass'], function() {
  gulp.watch("app/styles/**/*.scss", ['sass']);
  gulp.watch("app/scripts/*.js", ['concat']).on('change', browserSync.reload);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});



/*------------------------------------*\
  #INDIVIDUAL COMMANDS
\*------------------------------------*/

// Prepares the code for deployment
gulp.task("deploy", ['prefix', 'minify']);


// Sass
gulp.task('sass', function() {
  return gulp.src("app/styles/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("app/styles"))
    .pipe(browserSync.stream());
});


// Css prefix
gulp.task('prefix', () =>
  gulp.src('app/styles/main.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/styles'))
);


// Css minify
gulp.task('minify', function () {
  return gulp.src('app/styles/main.css')
    .pipe(csso())
    .pipe(gulp.dest('app/styles'));
});


// Concat
gulp.task('concat', function(){
  return gulp.src('app/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/scripts/dist'));
});


// Strip comments
gulp.task('default', function () {
  return gulp.src('template.js')
    .pipe(strip())
    .pipe(gulp.dest('dist'));
});


// Error message
function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}
