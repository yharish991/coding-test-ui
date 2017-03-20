var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');

var output = './assets/css';
var input = './assets/**/*.scss';

gulp.task('scss-lint', function scssLint() {
  return gulp.src(input)
  .pipe(scsslint())
  .pipe(scsslint.failReporter());
});

// Sass task
gulp.task('sass', function sassTask() {
  return gulp.src('./assets/sass/style.scss')
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(autoprefixer())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(output));
});

gulp.task('sass:watch', function sassWatchTask() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('style', function watchSass() {
  gulp.watch(input, ['scss-lint', 'sass', 'style']);
});

/* ESLint using Airbnb styleguide */
gulp.task('lint', function lint() {
  return gulp.src([
    '**/*.js',
    '!coverage/**',
    '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('default', ['style']);
gulp.task('build', ['scss-lint', 'sass', 'lint']);

