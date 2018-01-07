import { GalacticAge } from './../js/super-galactic.js';


//front-end
$(document).ready(function(){
  $('#super-galactic-form').submit(function(event){
    event.preventDefault();
    $('#time').text(moment());
    const mmInput = $('#mm').val();
    const ddInput = $('#dd').val();
    const yyyyInput = $('#yyyy').val();
    const userCountry = parseFloat($('#countries').val());
    const newUser = new GalacticAge();
    const userCurrentAge = parseFloat(newUser.calculateCurrentAge(mmInput, ddInput, yyyyInput));
    $('#current').text(userCurrentAge);

    const mercuryAge = parseFloat(newUser.calculateMercuryAge(userCurrentAge).toFixed(2));
    console.log(mercuryAge);
    const venusAge = parseFloat(newUser.calculateVenusAge(userCurrentAge).toFixed(2));
    console.log(venusAge);
    const marsAge = parseFloat(newUser.calculateMarsAge(userCurrentAge).toFixed(2));
    console.log(marsAge);
    const jupiterAge = parseFloat(newUser.calculateJupiterAge(userCurrentAge).toFixed(2));
    console.log(jupiterAge);

    $('#mercury-years').text(mercuryAge);
    const mercuryExp = newUser.calculateMercuryExpectancy(mercuryAge, userCountry);
    $('#mercury-expectancy').text(mercuryExp);

    $('#venus-years').text(venusAge);
    const venusExp = newUser.calculateVenusExpectancy(venusAge, userCountry);
    $('#venus-expectancy').text(venusExp);

    $('#mars-years').text(marsAge);
    const marsExp = newUser.calculateMarsExpectancy(marsAge, userCountry);
    $('#mars-expectancy').text(marsExp);

    $('#jupiter-years').text(jupiterAge);
    const jupiterExp = newUser.calculateJupiterExpectancy(jupiterAge, userCountry);
    $('#jupiter-expectancy').text(jupiterExp);





  });//event
});//document ready
