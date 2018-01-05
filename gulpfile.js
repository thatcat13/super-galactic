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
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
//tells function to run immediately by placing () after the call to require
//when bower-files function is run it returns a collection of all the files relevant to the dependencies stored in our Bower manifest file bower.json

var browserSync = require('browser-sync').create();
//create is a function that's part of the browser-sync pkg, used to create our server to deploy optimized versions of dev files

var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

var babelify = require('babelify');

//TASKS--------------------------------------------------------------------------------

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
  .transform(babelify.configure({
    presets: ["es2015"]
  }))
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
  gulp.start('bower');
  //bower runs parallel to other tasks since it only deals with 3rd party pkgs installed with bower
});
//will make a fresh folder of the newest files to work with

//LINTING TASK
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
//this will pull in all the js files in js folder, run jshint on them and report back any errors found

//CSS BUILD
gulp.task("cssBuild", function() {
  gulp.src(['css/*.css'])
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('./build/css'))
});
//HTML Build
gulp.task('htmlBuild', function(){
  browserSync.reload();
});

//bowerJS TASK
gulp.task('bowerJS', function(){
  return gulp.src(lib.ext('js').files)
  .pipe(concat('vendor.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});
//use gulp.src to pullin all JS files, and output one concat/minified file called vendor.js that we will load into our index.html.
//filtering out only the .js files by using the ext method build into the bower-files
// pass into ext ('js') as an argument
//finally use gulp.dest method to put finished file into build/js directory

//bowerCSS
gulp.task('bowerCSS', function(){
  return gulp.src(lib.ext('css').files)
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('./build/css'));
});

//bowerJS and bowerCSS combined
gulp.task('bower', ['bowerJS', 'bowerCSS']);

//SERVE TASK
gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch(['*.html'], ['htmlBuild']);
  gulp.watch("scss/*.scss", ['cssBuild']);
});
//calling browserSync.init() and passing in options telling browserSync to launch a local server from the directory currently in; telling it that the entry point (the place to start the app) is index.html
//watch: files are being watched automatically as soon as we start server; it says to watch all of the files in the dev js folder and whenever they change, run jsBuild
//watching bower manifest file for changes so that whenever we install or uninstall a frontend dependency our vendor files will be rebuilt and the browser reloaded with the bowerBuild task

//WATCH TASK
gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});
//lists an array of dependency tasks that need to be run whenever any of the js files change; wanna run linter and jsBrowserify and its dependencies; linter can be run at the same time as concat and browserify since they're mutually exclusive
//once those are complete, use task function to call browserSync.reload()
