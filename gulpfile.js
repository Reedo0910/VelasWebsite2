var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass',function(){
    return gulp.src('public/scss/**/*.+(sass|scss)')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
        stream:true
    }))
})

gulp.task('browserSync',function(){
    browserSync({
        server:{
            baseDir:'public'
        },
    })
})

gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('public/scss/**/*.+(sass|scss)',['sass']);
    gulp.watch('public/js/**/*.js',browserSync.reload);
    gulp.watch('public/html/**/*.html',browserSync.reload);
})

gulp.task('default',['browserSync','sass','watch']);