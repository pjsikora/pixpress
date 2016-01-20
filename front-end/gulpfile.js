var gulp = require('gulp'),
    gulpWebServer = require('gulp-webserver'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    clean = require('gulp-rimraf'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


var scriptToLoad = [
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.js',
        'node_modules/angular2/bundles/http.js'
    ],
    src = {
        ts: './src/ts/**/*.ts',
        sass: ['./src/style/style.scss', './src/style/style.sass', './src/style/*.scss'],
        html: './src/**/*.html',
        json: './src/**/*.json'
    },
    dest = {
        sass: '../server/public/css',
        js: '../server/public/js',
        html: '../server/public',
        json: '../server/public'
    },
    tsProject = ts.createProject('tsconfig.json');


gulp.task('tsc', function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest('../server/public/app'));
});

gulp.task('sass', function() {
    return gulp.src(src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(dest.sass));
});

gulp.task('html', function () {
    return gulp.src(src.html)
        .pipe(gulp.dest(dest.html));
});

gulp.task('json', function () {
    return gulp.src(src.json)
        .pipe(gulp.dest(dest.json));
});

gulp.task('concatJs', function(){
    return gulp.src(scriptToLoad)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest.js));
});

gulp.task('watch', ['tsc', 'sass', 'html', 'concatJs', 'json'], function(){
    gulp.watch(src.ts, ['tsc']);
    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.html, ['html']);
});

gulp.task('default', ['watch'], function () {});