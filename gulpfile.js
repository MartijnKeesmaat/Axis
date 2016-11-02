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

  gulp.watch("app/assets/css/**/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("app/assets/css/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/assets/css"))
    .pipe(browserSync.stream());
});

// Watch tasks
gulp.task("watch", function(){
  gulp.watch('app/assets/js/*.js', ["concat"]);
});

// Concat
gulp.task('concat', function(){
  return gulp.src('app/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/assets/js/dist'));
});


gulp.task("default", ['watch', 'concat', 'serve']);
