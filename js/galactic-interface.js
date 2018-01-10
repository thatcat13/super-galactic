import { GalacticAge } from './../js/super-galactic.js';


//front-end
$(document).ready(function(){
  $('#super-galactic-form').submit(function(event){
    event.preventDefault();
    const mmInput = $('#mm').val();
    const ddInput = $('#dd').val();
    const yyyyInput = $('#yyyy').val();
    const userCountry = parseFloat($('#countries').val());
    const newUser = new GalacticAge(mmInput, ddInput, yyyyInput, userCountry);
    console.log(newUser);
    const userCurrentAge = parseFloat(newUser.calculateCurrentAge(mmInput, ddInput, yyyyInput));
    console.log(userCurrentAge);
    $('#current').text(userCurrentAge);


    $('#mercury-years').text(newUser.mercuryAge);
    $('#mercury-expectancy').text(newUser.calculateMercuryExpectancy(newUser.mercuryAge, userCountry));

    $('#venus-years').text(newUser.venusAge);
    $('#venus-expectancy').text(newUser.calculateVenusExpectancy(newUser.venusAge, userCountry));

    $('#mars-years').text(newUser.marsAge);
    $('#mars-expectancy').text(newUser.calculateMarsExpectancy(newUser.marsAge, userCountry));

    $('#jupiter-years').text(newUser.jupiterAge);
    $('#jupiter-expectancy').text(newUser.calculateJupiterExpectancy(newUser.jupiterAge, userCountry));
  });//event
});//document ready
