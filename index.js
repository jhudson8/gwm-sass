module.exports = function(options, Sass) {
  Sass = Sass || require('gulp-sass');
  options = options || {};

  return {
    css: {
      glob: ['**/*.scss', '**/*.sass'],
      beforeMerge: function(_options, pipeline) {
        return pipeline.pipe(Sass(options));
      }
    }
  }
};
