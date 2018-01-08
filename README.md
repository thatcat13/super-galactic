##Javascript Week1 January 5, 2018
##Planning for Super-Galactic Solo Project
### By Cat Janowitz

1. Configuration / Dependencies
  * Gulp - A package which is in charge of managing all of our npm packages - sperating dev and production dependencies.
  * Browserify - A package that uses require and export keywords to translate JS to code the computer can understand.
  * Vinyl-Source-Stream - vinyl is used for putting browserified source code into a new file
  * Gulp-Concat - A package that can combine our interface javascript files together into one monster interface.js file.
  * Gulp-Uglify - A package that minifies our JS into something that is very ugly, but very readable for the computer.
  * Gulp-util - A package that lets you set up your build environment that works with the buildProduction dependencies.
  * del - A package that allows you to remove files within the asset pipeline
  * gulp-jshint - a Package which uses a linter to look for errors within your JS files.
  * bower-files - A package which lets you use certain front-end dependencies like JQuery, Bootstrap, etc.
  * Browser-sync - A package that lets you run a local server that can update changes to your document automatically
  * Babelify - A package that transpiles our ES6 code to more univerally supported ES5
  * buildProduction - buildProduction is an environment variable indicates which environment is being used (dev or production)

####These dependencies will be declared within our gulpfile.js and used through the project.

## Passing Specs:
| Description | Input | Output |
| :-------------     | :------------- | :------------- |
| **Obtain current accurate age in Earth years** | Input1: birthdate, current date | Output: current age in Earth years |
| **Convert current Earth age in years to seconds** | Input1: 42.00 Earth years | Output: 1.324512e9 Earth seconds|
### The following specs based on user living in United States with life expectancy of 79.3 years (results will vary based on country):
| Description | Input | Output |
| :-------------     | :------------- | :------------- |
| **Convert current Earth age in years to Mercury age in years** | Input1: 42.00 earth years | Output: 175 Mercury years|
| **Convert current Earth age in years to Venus age in years** | Input1: 42.00 earth years | Output: 67.74 Venus years|
| **Convert current Earth age in years to Mars age in years** | Input1: 42.00 earth years | Output: 22.34 Mars years|
| **Convert current Earth age in years to Jupiter age in years** | Input1: 42.00 earth years | Output: 3.54 Jupiter years|
|
| **How many years left to live on Mercury** | Input1: 42.00 earth years | Output: 155.41 Mercury years left to live|
| **How many years left to live on Venus** | Input1: 42.00 earth years | Output: 60.16 Venus years left to live|
| **How many years left to live on Mars** | Input1: 42.00 earth years | Output: 19.84 Mars years left to live |
| **How many years left to live on Jupiter** | Input1: 42.00 earth years | Output: 3.15 Jupiter years left to live|
|
| **How many years left to live on all planets if old enough to be dead on that planet** | Input1: 83.00 earth years | Output: "You're already dead on this planet!"|



## Setup/Installation Requirements

* access computer with internet connection and a browser
* go to github.com and search "thatcat13"
* browse thatcat13's repositories to find 'super-galactic' repository
* click on 'super-galactic' repository and copy URL link that directs to this specific repository
* access computer terminal and make sure you are at the top directory
* in terminal, after $ prompt, type in: git clone {-don't type the following, just do the following: paste URL into terminal after git clone-} then hit enter
* complete 'super-galactic' repository should be available at top directory (although desktop is suggested)
* browse folder of repository to find 'index.html'; drag file directly into browser OR in browser click file open and access 'index.html'


* or access gh-pages assigned to this project:
* thatcat13.github.io/



## Known Bugs

No known bugs, but I'm a newbie so please keep an eye out for any bugs you may come across.

## Support and contact details

If you have any issues, please feel free to contact me at:
* thatcat13@gmail.com
* https://github.com/thatcat13

## Technologies Used

* HTML
* SASS/CSS
* Bootstrap
* Javascript
* jQuery
* Gulp, Bower, Karma & Jasmine

### License

* The MIT License (MIT) applies to:
* Bootstrap (and is copyright 2016 Twitter)
* jQuery


Copyright (c) 2018 **Cat Janowitz**
