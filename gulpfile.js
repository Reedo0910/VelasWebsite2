var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('public/scss/**/*.+(sass|scss)')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
})

gulp.task('watch',function(){
    gulp.watch('public/scss/**/*.+(sass|scss)',['sass']);
})

gulp.task('default',['watch']);