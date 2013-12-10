module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'app/img',
      src: '**/*.{png,gif,jpg,jpeg}',
      dest: 'tmp/result/assets/'
    }]
  }
};