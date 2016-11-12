var gulp = require("gulp"),
browserSync = require('browser-sync').create();
sass = require("gulp-sass");
concat = require('gulp-concat');

function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/styles/**/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("app/styles/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/styles"))
    .pipe(browserSync.stream());
});

// Watch tasks
gulp.task("watch", function(){
  gulp.watch('app/scripts/*.js', ["concat"]);
});

// Concat
gulp.task('concat', function(){
  return gulp.src('app/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/scripts/dist'));
});


gulp.task("default", ['watch', 'concat', 'serve']);
