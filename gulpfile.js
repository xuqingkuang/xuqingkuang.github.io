// gulp modules
const gulp                    = require('gulp');
const gulpMinifyHTML          = require('gulp-htmlmin');
const eslint                  = require('gulp-eslint');
const spritesmith             = require('gulp.spritesmith');
const imagemin                = require('gulp-imagemin');

// webpack modules
const webpack                 = require('webpack');
const WebpackDevServer        = require('webpack-dev-server')
const webpackConfig           = require('./webpack-config');
const webpackProductionConfig = require('./webpack-production-config');

// Others
const path                    = require('path');
const express                 = require('express');
const jest                    = require('jest-cli');
const del                     = require('del');
const buffer                  = require('vinyl-buffer');

const devCompiler             = webpack(webpackConfig);

const config = {
  port: 8000,
  host: '0.0.0.0',
  staticDir: './assets',
  minifyHTML: {
    collapseWhitespace: true
  },
  test: {
    rootDir: 'src',
    collectCoverage: true,
    unmockedModulePathPatterns: ['./node_modules/react']
  }
}

/*
 * Development tasks
 */

gulp.task('dev-server', () => {
  new WebpackDevServer(devCompiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: {
      index: './assets/index.html'
    },
    staticOptions: {
      index: path.resolve('./assets/index.html')
    },
    stats: {
      colors: true
    }
  }).listen(config.port, config.host, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Listening at http://${config.host}:${config.port}`);
  });

  /* Handle Ctrl + C pressed in Docker */
  process.on('SIGINT', () => {
    console.log('Exiting...');
    process.exit();
  });
});

gulp.task('test', function (done) {
  jest.runCLI({ config : config.test }, ".", () => { done(); });
});

gulp.task('lint', function () {
  gulp.src(['src/**/*.js', '!**/__tests__/'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Create sprite image
gulp.task('sprite', function () {
  const output = './src/static/';
  // Generate our spritesheet
  const spriteData = gulp.src('./src/static/icons/*.png')
    .pipe(spritesmith({ imgName: './icons.png', cssName: './icons.css' }));
  const spritePrintData = gulp.src('./src/static/icons-print/*.png')
    .pipe(spritesmith({ imgName: './icons-print.png', cssName: './icons-print.css' }));
  // Pipe image stream through image optimizer and onto disk
  const imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(output));
  const imgPrintStream = spritePrintData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(output));
  const cssStream = spriteData.css
    .pipe(gulp.dest(output));
});

/*
 * Production tasks
 */

gulp.task('minify', () => {
  gulp.src(`${config.staticDir}/**/*.html`)
    .pipe(gulpMinifyHTML(config.minifyHTML))
    .pipe(gulp.dest(webpackConfig.output.path))
});

gulp.task('build', (done) => {
  webpack(webpackProductionConfig, (err, stats) => {
    if (err) {
      throw(`webpack:build - ${err}`);
    }
    console.log('[webpack:build]', stats.toString({colors: true}));
    done();
  });
});

/*
 * Common tasks
 */

gulp.task('copy-assets', () => {
  gulp.src(`${config.staticDir}/**`)
    .pipe(gulp.dest(webpackConfig.output.path))
});
gulp.task('clean', (done) => {
  del([`${webpackConfig.output.path}/*`], done);
});
gulp.task('default', ['dev-server']);
gulp.task('production', ['copy-assets', 'build'], () => { gulp.run('minify'); });
