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
var uglify = require('gulp-uglify');
//minifies JS to readable code for the computer with the aim of streamlining the app
var utilities = require('gulp-util');
//sets up build environment that works with the buildProduction dependencies
var del = require('del');
//removes files within asset pipeline when no longer needed; build and tmp folders will need to be fresh and empty when beginning development
var jshint = require('gulp-jshint');
//looks for errors in JS files
var buildProduction = utilities.env.production;
//buildProduction is an environment variable
//indicates which environment is being used (dev or production)
//$ gulp build --production: sets var to true, thus production build
//$gulp build: sets var to false, thus development build

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

//MINIFY TASK
//(after jsBrowserify task b/c jsBrowserify is a dependency of the minification task)
gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src('./build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});
//so when minifyScripts task is run, it will run jsBrowserify, which will run concatInterface

//CLEAN TASK
gulp.task('clean', function(){
  return del(['build', 'tmp']);
});
//pass del function an array of paths to delete and it removes them
//clean task is called automatically by making it a dependency of the build task

//BUILD TASK
gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify')
  }
});
//will make a fresh folder of the newest files to work with

//LINTING TASK
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
//this will pull in all the js files in js folder, run jshint on them and report back any errors found
