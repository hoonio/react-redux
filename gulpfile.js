const gulp       = require('gulp');
const $          = require('gulp-load-plugins')();
const sync       = $.sync(gulp).sync;
const del        = require('del');
const webpack    = require('webpack-stream');
const browserify = require('browserify');
const watchify   = require('watchify');
const source     = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();

const bundler = {
  w: null,
  init: function() {
    const b = browserify({
      entries: ['./app/scripts/app.js'],
      insertGlobals: true,
      cache: {},
      packageCache: {}
    });
    this.w = watchify(b);
  },
  bundle: function() {
    return this.w && this.w.bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/public'))
      .pipe(browserSync.stream())
  },
  watch: function() {
    this.w && this.w.on('update', this.bundle.bind(this));
  },
  test: function() {
    console.log('test has begun')
    b.external('react-dom');
    b.external('react-dom/server');
    b.external('react-addons-test-utils');
    const enzyme = 'enzyme';
    // const wrapper = enzyme.mount(<Home />);
  },
  stop: function() {
    this.w && this.w.close();
  }
};

gulp.task('nodemon', function(callback) {
  var started = false;
  return $.nodemon({script: 'dist/server.js'})
    .on('start', function() {
      if (!started){
        callback();
        started = true
      }
    })
})

gulp.task('webpack', function() {
  return gulp.src('app/scripts/app.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/public/'))
})

gulp.task('styles', function() {
  return $.rubySass('app/styles/main.scss', {
      style: 'expanded',
      precision: 10,
      loadPath: ['node_modules']
    })
    .on('error', $.util.log.bind($.util, 'Sass Error'))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
    .pipe(browserSync.stream())
});

gulp.task('scripts', function() {
  bundler.init();
  return bundler.bundle();
});

gulp.task('server', function() {
  return gulp.src(['app/server.js', 'package.json', 'web.config'])
    .pipe(gulp.dest('dist/'))
    .pipe($.size());
});

gulp.task('html', function() {
  var assets = $.useref.assets();
  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist/public'))
    .pipe($.size())
    .pipe(browserSync.stream())
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/public/images'))
    .pipe($.size());
});

gulp.task('fonts', function() {
  return gulp.src(['app/fonts/**/*'])
    .pipe(gulp.dest('dist/public/fonts'))
    .pipe($.size());
});

gulp.task('extras', function () {
  return gulp.src(['app/*.txt', 'app/*.ico', 'app/files/*'])
    .pipe(gulp.dest('dist/public/'))
    .pipe($.size());
});

gulp.task('serve', function() {
  gulp.src('dist/public')
    .pipe($.webserver({
      livereload: true,
      port: 9000
    }));
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('dist/**/*', { read: false })
    .pipe($.deployGit({
      repository: 'https://hoonio@hoonio-test.scm.azurewebsites.net:443/hoonio-test.git',
      prefix: 'dist',
      branches: ['master', 'brainnwave']
    }));
});

gulp.task('release', ['build:production'], function() {
  return gulp.src('dist/**/*', { read: false })
    .pipe($.deployGit({
      repository: 'https://hoonio@hoonio-root.scm.azurewebsites.net:443/hoonio-root.git',
      prefix: 'dist',
      branches: ['master']
    }));
});

gulp.task('set-production', function() {
  process.env.NODE_ENV = 'production';
});

gulp.task('minify:js', function() {
  return gulp.src('dist/public/**/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/public/'))
    .pipe($.size());
});

gulp.task('minify:css', function() {
  return gulp.src('dist/public/**/*.css')
    .pipe($.minifyCss())
    .pipe(gulp.dest('dist/public'))
    .pipe($.size());
});

gulp.task('minify', ['minify:js', 'minify:css']);

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('bundle', ['html', 'styles', 'webpack', 'server', 'images', 'fonts', 'extras']);

gulp.task('clean-bundle', sync(['clean', 'bundle']));

gulp.task('build', ['clean-bundle'], bundler.stop.bind(bundler));

gulp.task('build:production', sync(['set-production', 'build', 'minify']));

gulp.task('serve:production', sync(['build:production', 'serve']));

gulp.task('test', () => {
  bundler.test();
})

gulp.task('default', ['watch']);

gulp.task('watch', sync(['clean-bundle', 'serve', 'nodemon']), function() {
  browserSync.init({
    proxy: 'http://localhost:9001',
    files: ['dist/public/**/*.*']
  })

  // bundler.watch();
  gulp.watch('app/*.html', ['html']);
  gulp.watch('app/scripts/**/*.js', ['webpack']);
  gulp.watch('app/server.js', ['server']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/images/**/*', ['images']);
  gulp.watch('app/fonts/**/*', ['fonts']);
});
