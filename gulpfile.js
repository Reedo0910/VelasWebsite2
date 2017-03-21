var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var del = require('del')
var runSequence = require('run-sequence')

gulp.task('clean', function () {
    return del.sync('dist').then(function (cb) {
        return cache.clearAll(cb);
    });
})

gulp.task('clean:dist', function () {
    return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

gulp.task('images', function () {
    return gulp.src('public/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
})

gulp.task('favicon', function () {
    return gulp.src('public/favicon.ico')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/'))
})

gulp.task('sass', function () {
    return gulp.src('public/scss/**/*.+(sass|scss)')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('fonts', function () {
    return gulp.src('public/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('movevue', function () {
    return gulp.src('public/js/vue.min.js')
        .pipe(gulp.dest('dist/js'))
})

gulp.task('movefiles', function () {
    return gulp.src('public/log.json.js')
        .pipe(gulp.dest('dist'))
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
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano({zindex: false})))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('public/scss/**/*.+(sass|scss)', ['sass'])
    gulp.watch('public/js/**/*.js', browserSync.reload)
    gulp.watch('public/components/**/*.js', browserSync.reload)
    gulp.watch('public/**/*.html', browserSync.reload)
})

gulp.task('build', function (callback) {
    runSequence('clean:dist', 'sass', ['useref', 'images', 'fonts', 'favicon', 'movevue', 'movefiles'], callback)
})

gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'], callback)
})