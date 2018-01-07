


export class GalacticAge {
  constructor(currentAge, currentDate) {
    this.currentAge = currentAge;
    this.currentDate = currentDate;
  }

  calculateAgeInSeconds(ageInYears){
    return (ageInYears * 31536000);
  }

  calculateCurrentAge(month, day, year){
    const birthdate = [];
    const monthInput = month;
    const dayInput = day;
    const yearInput = year;
    birthdate.push(monthInput, dayInput, yearInput);
    const currentAge = moment(birthdate, "MM-DD-YYYY").fromNow(true).split(" ")[0];
    console.log(currentAge);
    return currentAge;
  }
  calculateMercuryAge(age){
    const mercuryAge = age / 0.24;
    return mercuryAge;

  }
  calculateVenusAge(age){
    const venusAge = age / 0.62;
    return venusAge;
  }
  calculateMarsAge(age){
    const marsAge = age / 1.88;
    return marsAge;
  }
  calculateJupiterAge(age){
    const jupisterAge = age / 11.86;
    return jupiterAge;
  }


  calculateMercuryExpectancy(mercuryAge, localAgeExp){
    const mercuryExp = ((localAgeExp / 0.24) - (mercuryAge));
    return mercuryExp;
  }
  calculateVenusExpectancy(venusAge, localAgeExp){
    const venusExp = ((localAgeExp / 0.24) - (venusAge));
    return venusExp;
  }
  calculateMarsExpectancy(marsAge, localAgeExp){
    const marsExp = ((localAgeExp / 0.24) - (marsAge));
    return marsExp;
  }
  calculateJupiterExpectancy(jupiterAge, localAgeExp){
    const jupiterExp = ((localAgeExp / 0.24) - (jupiterAge));
    return jupiterExp;
  }
}
