var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var minifyCSS = require('gulp-minify-css')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var del = require('del')
var runSequence = require('run-sequence')

gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
})

gulp.task('sass', function () {
    return gulp.src('public/scss/**/*.+(sass|scss)')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('fonts', function () {
    return gulp.src('public/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'public'
        },
    })
})

gulp.task('useref', function () {
    return gulp.src('public/*.html')
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(useref())
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('public/scss/**/*.+(sass|scss)', ['sass'])
    gulp.watch('public/js/**/*.js', browserSync.reload)
    gulp.watch('public/**/*.html', browserSync.reload)
})

gulp.task('build', function (callback) {
    runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'], callback)
})

gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'], callback)
})