const {src, dest , watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function styleLibrary() {
    return src('*.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask(){
    watch(['*.scss'], styleLibrary)
}

exports.default = series(styleLibrary, watchTask)