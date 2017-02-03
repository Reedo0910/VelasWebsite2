var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('./public/scss/**/*.+(sass|scss)')
    .pipe(sass())
    .pipe(gulp.dest('destination'))
})

gulp.task('watch',function(){
    gulp.watch('./public/scss/**/*.+(sass|scss)',['sass']);
})