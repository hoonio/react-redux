"use strict"

const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const sync = $.sync(gulp).sync
const del = require('del')
const webpack = require('webpack-stream')
const WebpackDevServer = require('webpack-dev-server')
const browserSync = require('browser-sync').create()

gulp.task('nodemon', (callback) => {
  // replaces watch
  let started = false
  return $.nodemon({ script: 'dist/server.js' })
    .on('start', () => {
      if (!started) {
        callback()
        started = true
      }
    })
})

gulp.task('test', () => (
  gulp.src('app/tests/components/portfolio.spec.js')
    .pipe(webpack(require('./webpack.config.test.js')))
    .pipe(gulp.dest('dist/public/'))
))

gulp.task('webpack', () => (
  // replaces scripts
  gulp.src('app/scripts/app.js')
    .pipe($.plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/public/'))
))

gulp.task('serve', (callback) => {
  // webpack-dev-server, not working yet
  const compiler = webpack(require('./webpack.config.dev.js'))

  new WebpackDevServer(compiler, {
  // server and middleware options
  }).listen(9002, 'localhost', (err) => {
    if (err) throw new $.util.PluginError('webpack-dev-server', err)
    // Server listening
    $.util.log('[webpack-dev-server]', 'http://localhost:9002/webpack-dev-server/index.html')

    // keep the server alive or continue?
    callback()
  })
})

gulp.task('styles', () => (
  $.rubySass('app/styles/main.scss', {
    style: 'expanded',
    precision: 10,
    loadPath: ['node_modules'],
  })
    .on('error', $.util.log.bind($.util, 'Sass Error'))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
    .pipe(browserSync.stream())
))

gulp.task('server', () => (
  gulp.src(['app/server.js', 'package.json', 'web.config'])
    .pipe(gulp.dest('dist/'))
    .pipe($.size())
))

gulp.task('html', () => (
  gulp.src('app/*.html')
    .pipe($.useref())
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
    .pipe(browserSync.stream())
))

gulp.task('images', () => (
  gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/public/images'))
    .pipe($.size())
))

gulp.task('fonts', () => (
  gulp.src(['app/fonts/**/*'])
    .pipe(gulp.dest('dist/public/fonts'))
    .pipe($.size())
))

gulp.task('extras', () => (
  gulp.src(['app/*.txt', 'app/*.ico', 'app/files/*'])
    .pipe(gulp.dest('dist/public/'))
    .pipe($.size())
))

gulp.task('deploy', ['build'], () => (
  gulp.src('dist/**/*', { read: false })
    .pipe($.deployGit({
      repository: 'https://hoonio@hoonio-test.scm.azurewebsites.net:443/hoonio-test.git',
      prefix: 'dist',
      branches: ['master', 'test'],
    }))
))

gulp.task('release', ['build:production'], () => (
  gulp.src('dist/**/*', { read: false })
    .pipe($.deployGit({
      repository: 'https://hoonio@hoonio-root.scm.azurewebsites.net:443/hoonio-root.git',
      prefix: 'dist',
      branches: ['master'],
    }))
))

gulp.task('set-production', () => {
  process.env.NODE_ENV = 'production';
})

gulp.task('minify:js', () => (
  gulp.src('dist/public/**/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/public/'))
    .pipe($.size())
))

gulp.task('minify:css', () => (
  gulp.src('dist/public/**/*.css')
    .pipe($.minifyCss())
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
))

gulp.task('minify', ['minify:js', 'minify:css'])

gulp.task('clean', del.bind(null, 'dist'))

gulp.task('bundle', ['html', 'styles', 'webpack', 'server', 'images', 'fonts', 'extras'])

gulp.task('clean-bundle', sync(['clean', 'bundle']))

gulp.task('build', ['clean-bundle'])

gulp.task('build:production', sync(['set-production', 'build', 'minify']))

gulp.task('default', ['watch'])

gulp.task('watch', sync(['clean-bundle', 'nodemon']), () => {
  browserSync.init({
    proxy: 'http://localhost:9001',
    files: ['dist/public/**/*.*'],
  })
  gulp.watch('app/*.html', ['html'])
  gulp.watch('app/scripts/**/*.js', ['webpack'])
  gulp.watch('app/server.js', ['server'])
  gulp.watch('app/styles/**/*.scss', ['styles'])
  gulp.watch('app/images/**/*', ['images'])
  gulp.watch('app/fonts/**/*', ['fonts'])
})
