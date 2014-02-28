module.exports = function(options, Sass) {
  Sass = Sass || require('gulp-sass');
  options = options || {};

  return {
    css: {
      beforeMerge: function(_options, pipeline) {
        return pipeline.pipe(Sass(options));
      }
    }
  }
};
