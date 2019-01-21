var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var inlineimg = require('gulp-inline-images');
var runSequence = require('run-sequence');

gulp.task('sass',  function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js', 'node_modules/popper.js/dist/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream())
        .pipe(browserSync.reload({
          stream: true
        }))
});

gulp.task('inline-images', function(){
  return gulp.src('../src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(inlineimg('src'))
  .pipe(gulp.dest('src/img'));
});

gulp.task('serve', function() {

  browserSync.init({
      server: "./src"
  });
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'],  gulp.series('sass')); 
  gulp.watch(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js' , 'node_modules/popper.js/dist/popper.min.js'],  gulp.series('js')); 
  gulp.watch('../src/img/**/*',  gulp.series('inline-images')); 

  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['sass' ,'inline-images',   'serve'], function() {}));

