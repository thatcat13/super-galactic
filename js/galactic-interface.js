import { GalacticAge } from './../js/super-galactic.js';
// var GalacticAge = require('./../js/super-galactic.js').galacticModule;

//front-end
$(document).ready(function(){
  $('#super-galactic-form').submit(function(event){
    event.preventDefault();
    $('#time').text(moment());
    console.log('ive been clicked!');
    const line1input = $('#mm').val();
    const line2input = $('#dd').val();
    const line3input = $('#yyyy').val();
    console.log(line1input+line2input+line3input);

  });//event
});//document ready
