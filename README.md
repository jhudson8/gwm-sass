gulp-web-modules plugin used to scan for all .sass/.scss files and convert to plain css

Usage
-----
Place any sass/scss files within any section directories and they will be converted to css using [gulp-sass](https://npmjs.org/package/gulp-sass) before the merge

Install
------
Add this plugin to the gulp-web-module reference in your gulpfile
```javascript
    var gulpWebModules = require('gulp-web-modules'),
        gwmSass = require('gwm-sass');

    gulpWebModules({
      plugins: [
        gwmSass(options[, {gulp-sass}])
      ]
    }).injectTasks(gulp);
```

Options
-------
The options are a pass through to the gulp-sass module with the second parameter as the gulp-sass instance to use one other than the default
