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

  gulp.watch("app/assets/css/**/*.scss", ['sass']).on('change', browserSync.reload);;
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

// Watch tasks
gulp.task("watch", function(){
  gulp.watch('app/assets/js/*.js', ["concat"]);
});

// sass
gulp.task('sass', function () {
  gulp.src('app/assets/css/index.scss')
  .pipe(sass())
  .on("error", errorLog)
  .pipe(gulp.dest('app/assets/css/'));
});

// Concat
gulp.task('concat', function(){
  return gulp.src('app/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/assets/js/dist'));
});


gulp.task("default", ['watch', 'sass', 'concat', 'serve']);
