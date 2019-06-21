const gulp = require('gulp')

const ts = require('gulp-typescript')
const replace = require('gulp-replace')
const run = require('gulp-run')


let tsProject = ts.createProject('./tsconfig.json')

function compile () {
  return gulp.src('src/**/*.ts')
             .pipe(tsProject())
             .pipe(replace('exports', 'module.exports'))
             .pipe(gulp.dest('./js'))
}

gulp.task('compile', () => {
  return compile()
})

gulp.task('run', () => {
  compile()

  return run('electron .').exec()
})