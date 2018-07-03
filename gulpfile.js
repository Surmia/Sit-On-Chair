const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const c = require('ansi-colors');
const notifier = require('node-notifier');

function showError(err) {
    console.log(c.red(err.messageFormatted));

    notifier.notify({
        title: 'Błąd kompilacji',
        message: err.messageFormatted
    });

    this.emit('end');
}

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(plumber({
            errorHandler : showError
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //expanded, nested, compact, compressed
        }))
        .pipe(autoprefixer({
            browsers: ['> 5%'],
        }))
        .pipe(sourcemaps.write('.')) //Dzięki kropce tworzy się oddzielny plik na długie komentarze
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', function () {
   console.log(c.yellow('-------------Rozpoczynam pracę--------------'));
   gulp.start(['sass', 'browser-sync', 'watch']);
});