//const watchify = require("wathcify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const { src, dest } = require("gulp");
const { series } = require("gulp");
const babel = require("gulp-babel");
const { watch } = require("gulp");
const imagemin = require("gulp-imagemin");

function minimage() {
  return src("src/images/*").pipe(imagemin()).pipe(dest("dist/images"));
}

function transpile() {
  return src("dist/bundle1.js").pipe(babel()).pipe(dest("dist/"));
}

function brsfi() {
  return browserify("./src/index1.js")
    .bundle()
    .pipe(source("bundle1.js"))
    .pipe(dest("./dist/"));
}

// enable this if you want to watch changes

/* exports.default = function() {
  watch('src/index.js', series(transpile, brsfi));
} */

// enable this if you want manualy run you build
exports.default = function () {
  watch("src/index1.js", series(minimage, brsfi, transpile));
};
