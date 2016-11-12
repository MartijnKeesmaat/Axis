var gulp = require("gulp"),
browserSync = require('browser-sync').create();
sass = require("gulp-sass");
concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/styles/**/*.scss", ['sass']);
  gulp.watch("app/scripts/*.js", ['concat']).on('change', browserSync.reload);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("app/styles/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/styles"))
    .pipe(browserSync.stream());
});

gulp.task('prefix', () =>
  gulp.src('app/styles/main.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/styles'))
);

// Concat
gulp.task('concat', function(){
  return gulp.src('app/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/scripts/dist'));
});


// gulp.task("default", ['watch', 'concat', 'serve']);
gulp.task("deploy", ['prefix']);
