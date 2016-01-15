var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require("gulp-babel");

var src = {
    css: 'sass/*',
    js: 'js/*'
};

var dist = {
    css: '../server/public/css',
    js: '../server/public/js'
}

gulp.task('watch', function() {
    gulp.watch(src.css, ['sass']);
    gulp.watch(src.js, ['babel']);
});


gulp.task("babel", function () {
    gulp.src("src/js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest(dist.js));
});

gulp.task('sass', function() {
    gulp
        .src('./sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest(dist.css));
});


gulp.task('default', ['watch', 'sass']);