// loads various gulp modules
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var cssFiles = 'assets/css/**/*.css';
var cssDest = 'assets/css';
var jsFiles = 'assets/js/**/*.js';
var jsDest = 'assets/js';

// create tasks
gulp.task('css', function(){
  return gulp.src(cssFiles)
  .pipe(minifyCSS())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest(cssDest))
});

gulp.task('js', function() {
  return gulp.src(jsFiles)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(jsDest))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function () {
  gulp.watch([
    cssFiles
  ], ['css']);

  gulp.watch([
    jsFiles
  ], ['js']);
})

gulp.task('default', ['css', 'js']);