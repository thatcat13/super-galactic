//REQUIRE STATEMENTS
//use the require function to bring in packages, or dependencies
var gulp = require('gulp');
//mother package: in charge of running all npm packages
var browserify = require('browserify');
//uses export and require keywords to translate code into JS the browser can understand
var source = require('vinyl-source-stream');
//vinyl is used for putting browserified source code into a new file
var concat = require('gulp-concat');
//combines interface JS files together into one monster interface.js file


//TASKS

//CONCAT TASK
gulp.task('concatInterface', function(){
  return gulp.src(['./js/*-interface.js'])
//* is a globbing pattern (wildcard symbol), telling gulp-concat to concatinate all files ending in -interface.js
//gulp.src pulls in the files used in the browser--formatted as an array of file names we are passing in
    .pipe(concat('allConcat.js'))
//call the concat() function that was created with 'require' at the top; pass in the name of the file we want to create: allConcat.js
    .pipe(gulp.dest('./tmp'))
});
//gulp.dest tells gulp where to save the new file, which contains both -interface files
//it's temporary ('tmp') because it will not be used in the browser; first we have to browserify to pull in any modules it uses


//BROWSERIFY TASK
//adding tasks will call functions
gulp.task('jsBrowserify', ['concatInterface'], function(){
  return browserify({ entries: ['./tmp/allConcat.js']})
//here the browserify function is called and instructs which files to browserify by passing in an object with a key 'entries'; its corresponding value is an array of file names
//pulling in front-end only, not backend because backend was taken care of by the require keyword in -interface file
//tmp b/c allConcat.js isn't used in the browser
  .bundle()
//bundle is a process built into browserify pkg
  .pipe(source('app.js'))
//tell it to create a new file called app.js
  .pipe(gulp.dest('./build/js'));
//put it into a new folder named build inside its own js folder
});
//build folder is used to separate out production version of the project
