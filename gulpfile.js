'use strict';

const { series, parallel, src, dest, watch } = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

// Path
const path = {
    www: {
        style: 'docs/style/',
        html : 'docs/*.html'
    },
    src: {
        style: 'src/styles/*.less'
    },
    watch: {
        srcStyle   : 'src/styles/**/*.less',
        buildStyle : 'docs/style/*.css',
        html       : 'docs/*.html'
    }
}

// Compilation less
function styles() {
    return src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(less()
            .on('error', notify.onError({
                message: '<%= error.fileName %>' +
                '\nLine <%= error.lineNumber %>:' +
                '\n<%= error.message %>',
                title  : '<%= error.plugin %>'
            }))
        )
        .pipe(postcss([
            mqpacker({
                sort: true
            })
        ]))
        .pipe(sourcemaps.write())
        .pipe(dest(path.www.style));
}
exports.styles = styles;

function serve() {
    browserSync.init({
        server: "./docs"
    });

    watch([
        path.watch.srcStyle
    ], styles);

    watch([
        path.watch.html,
        path.watch.buildStyle
    ]).on('change', browserSync.reload);
}

exports.default = series(
  parallel(styles),
  serve
);