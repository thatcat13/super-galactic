import { GalacticAge } from './../js/super-galactic.js';


//front-end
$(document).ready(function(){
  $('#super-galactic-form').submit(function(event){
    event.preventDefault();
    $('#time').text(moment());
    console.log('ive been clicked!');
    const mmInput = $('#mm').val();
    const ddInput = $('#dd').val();
    const yyyyInput = $('#yyyy').val();
    const newUser = new GalacticAge();
    const userCurrentAge = parseInt(newUser.calculateCurrentAge(mmInput, ddInput, yyyyInput));
    console.log(typeof userCurrentAge);

  });//event
});//document ready
