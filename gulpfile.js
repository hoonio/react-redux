var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var sync = $.sync(gulp).sync
var del = require('del')
var webpack = require('webpack-stream')
var WebpackDevServer = require('webpack-dev-server')
var browserSync = require('browser-sync').create()

gulp.task('server:run', function(callback) {
  // isomorphic server
  var started = false
  return $.nodemon({ script: 'dist/server.js' })
    .on('start', function() {
      if (!started) {
        callback()
        started = true
      }
    })
})

gulp.task('server:dev', function(callback) {
  var started = false
  return $.nodemon({ script: 'app/server.dev.js' })
    .on('start', function() {
      if (!started) {
        callback()
        started = true
      }
    })
})

gulp.task('test', function() {
  return gulp.src('app/tests/components/portfolio.spec.js')
    .pipe(webpack(require('./webpack.config.test.js')))
    .pipe(gulp.dest('dist/public/'))
})

gulp.task('webpack', function() {
  // replaces scripts
  return gulp.src('app/scripts/app.js')
    .pipe($.plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/public/'))
})

gulp.task('server:build', ['server:files'], function() {
  return gulp.src('app/server.js')
    .pipe(webpack(require('./webpack.config.server.js')))
    .pipe(gulp.dest('dist/'))
})

gulp.task('serve', function(callback) {
  // webpack-dev-server, not working yet
  var compiler = webpack(require('./webpack.config.dev.js'))

  new WebpackDevServer(compiler, {
  // server and middleware options
}).listen(9002, 'localhost', function(err) {
    if (err) throw new $.util.PluginError('webpack-dev-server', err)
    // Server listening
    $.util.log('[webpack-dev-server]', 'http://localhost:9002/webpack-dev-server/index.html')

    // keep the server alive or continue?
    callback()
  })
})

gulp.task('styles', function() {
  return $.rubySass('app/styles/main.scss', {
    style: 'expanded',
    precision: 10,
    loadPath: ['node_modules'],
  })
    .on('error', $.util.log.bind($.util, 'Sass Error'))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
    .pipe(browserSync.stream())
})

gulp.task('server:files', function() {
  return gulp.src(['app/index.ejs', 'package.json', 'web.config'])
    .pipe(gulp.dest('dist/'))
    .pipe($.size())
})

gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe($.useref())
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
    .pipe(browserSync.stream())
})

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/public/images'))
    .pipe($.size())
})

gulp.task('fonts', function() {
  return gulp.src(['app/fonts/**/*'])
    .pipe(gulp.dest('dist/public/fonts'))
    .pipe($.size())
})

gulp.task('extras', function() {
  return gulp.src(['app/*.txt', 'app/*.ico', 'app/files/*'])
    .pipe(gulp.dest('dist/public/'))
    .pipe($.size())
})

gulp.task('deploy', ['build'], function() {
  return gulp.src('dist/**/*', { read: false })
    .pipe($.deployGit({
      repository: 'https://hoonio@hoonio-test.scm.azurewebsites.net:443/hoonio-test.git',
      prefix: 'dist',
      branches: ['master', 'test'],
    }))
})

gulp.task('release', ['build:production'], function() {
  return gulp.src('dist/**/*', { read: false })
    .pipe($.deployGit({
      repository: 'https://hoonio@hoonio-root.scm.azurewebsites.net:443/hoonio-root.git',
      prefix: 'dist',
      branches: ['master'],
    }))
})

gulp.task('set-production', function() {
  process.env.NODE_ENV = 'production';
})

gulp.task('minify:js', function() {
  return gulp.src('dist/public/**/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/public/'))
    .pipe($.size())
})

gulp.task('minify:css', function() {
  return gulp.src('dist/public/**/*.css')
    .pipe($.minifyCss())
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
})

gulp.task('minify', ['minify:js', 'minify:css'])

gulp.task('clean', del.bind(null, 'dist'))

gulp.task('bundle', ['html', 'styles', 'webpack', 'server:build', 'images', 'fonts', 'extras'])

gulp.task('clean-bundle', sync(['clean', 'bundle']))

gulp.task('build', ['clean-bundle'])

gulp.task('build:production', sync(['set-production', 'build', 'minify']))

gulp.task('default', ['watch'])

gulp.task('watch', sync(['clean-bundle', 'server:run']), function() {
  browserSync.init({
    proxy: 'http://localhost:9001',
    files: ['dist/public/**/*.*'],
  })
  gulp.watch('app/*.html', ['html'])
  gulp.watch('app/scripts/**/*.js', ['webpack'])
  gulp.watch('app/server.js', ['server:build'])
  gulp.watch('app/styles/**/*.scss', ['styles'])
  gulp.watch('app/images/**/*', ['images'])
  gulp.watch('app/fonts/**/*', ['fonts'])
})
