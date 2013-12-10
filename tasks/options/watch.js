var Helpers = require('../helpers');

var scripts = '{app,tests}/**/*.{js,coffee}',
    templates = 'app/templates/**/*.{hbs,handlebars,hjs,emblem}',
    styles = 'app/styles/**/*.{css,sass,scss,less,styl}',
    images = 'app/img/**/*.{png,gif,jpg,jpeg}',
    fonts = 'app/fonts/**/*.{ttf,oet,woff,svg}',
    indexHTML = 'app/index.html',
    other = '{app,tests,public,vendor}/**/*';

module.exports = {
  scripts: {
    files: [scripts],
    tasks: ['lock', 'buildScripts', 'unlock']
  },
  templates: {
    files: [templates],
    tasks: ['lock', 'buildTemplates:debug', 'unlock']
  },
  fonts: {
    files: [fonts],
    tasks: ['lock', 'buildFonts', 'unlock']
  },
  images: {
    files: [images],
    tasks: ['lock', 'buildPictures', 'unlock']
  },
  styles: {
    files: [styles],
    tasks: ['lock', 'buildStyles', 'unlock']
  },
  indexHTML: {
    files: [indexHTML],
    tasks: ['lock', 'buildIndexHTML:debug', 'unlock']
  },
  other: {
    files: [other, '!'+scripts, '!'+templates, '!'+styles, '!'+indexHTML],
    tasks: ['lock', 'build:debug', 'unlock']
  },

  options: {
    // No need to debounce
    debounceDelay: 0,
    // When we don't have inotify
    interval: 100,
    livereload: Helpers.isPackageAvailable("connect-livereload")
  }
};
