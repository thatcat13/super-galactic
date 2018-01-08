


export class GalacticAge {
  constructor(thing) {
    this.thing = thing;
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
    const jupiterAge = age / 11.86;
    return jupiterAge;
  }


  calculateMercuryExpectancy(mercuryAge, localAgeExp){
    const mercuryExp = ((localAgeExp / 0.24) - (mercuryAge));
      if (mercuryExp <= 0) {
        return ("You're already dead on this planet!");
      } else {
        return mercuryExp;
      }
  }
  calculateVenusExpectancy(venusAge, localAgeExp){
    const venusExp = ((localAgeExp / 0.62) - (venusAge));
      if (venusExp <= 0) {
        return ("You're already dead on this planet!");
      } else {
        return venusExp;
      }
  }
  calculateMarsExpectancy(marsAge, localAgeExp){
    const marsExp = ((localAgeExp / 1.88) - (marsAge));
    if (marsExp <= 0) {
      return ("You're already dead on this planet!");
    } else {
      return marsExp;
    }
  }
  calculateJupiterExpectancy(jupiterAge, localAgeExp){
    const jupiterExp = ((localAgeExp / 11.86) - (jupiterAge));
    if (jupiterExp <= 0) {
      return ("You're already dead on this planet!");
    } else {
      return jupiterExp;
    }
  }
}
