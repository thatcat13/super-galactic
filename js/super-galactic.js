


export class GalacticAge {
  constructor(mm, dd, yyyy, currentAge, mercuryAge, venusAge, marsAge, jupiterAge, mercuryExp, venusExp, marsExp, jupiterExp) {
    this.mm = mm;
    this.dd = dd;
    this.yyyy = yyyy;
    this.currentAge = currentAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
  }

  calculateAgeInSeconds(ageInYears){
    return (ageInYears * 31536000);
  }

  calculateCurrentAge(month, day, year){
    const birthdate = [];
    const monthInput = this.mm;
    const dayInput = this.dd;
    const yearInput = this.yyyy;
    birthdate.push(monthInput, dayInput, yearInput);
    const currentAge = moment(birthdate, "MM-DD-YYYY").fromNow(true).split(" ")[0];
    this.currentAge = currentAge;
    return this.currentAge;
  }
  calculateMercuryAge(age){
    const mercuryAge = this.currentAge / 0.24;
    this.mercuryAge = mercuryAge;
    return mercuryAge.toFixed(2);

  }
  calculateVenusAge(age){
    const venusAge = this.currentAge / 0.62;
    this.venusAge = venusAge;
    return venusAge.toFixed(2);
  }
  calculateMarsAge(age){
    const marsAge = this.currentAge / 1.88;
    this.marsAge = marsAge;
    return marsAge.toFixed(2);
  }
  calculateJupiterAge(age){
    const jupiterAge = this.currentAge / 11.86;
    this.jupiterAge = jupiterAge;
    return jupiterAge.toFixed(2);
  }


  calculateMercuryExpectancy(mercuryAge, localAgeExp){
    const mercuryExp = ((localAgeExp / 0.24) - (this.mercuryAge));
      if (mercuryExp <= 0) {
        return ("You're already dead on this planet!");
      } else {
        return mercuryExp.toFixed(2);
      }
  }
  calculateVenusExpectancy(venusAge, localAgeExp){
    const venusExp = ((localAgeExp / 0.62) - (this.venusAge));
      if (venusExp <= 0) {
        return ("You're already dead on this planet!");
      } else {
        return venusExp.toFixed(2);
      }
  }
  calculateMarsExpectancy(marsAge, localAgeExp){
    const marsExp = ((localAgeExp / 1.88) - (this.marsAge));
    if (marsExp <= 0) {
      return ("You're already dead on this planet!");
    } else {
      return marsExp.toFixed(2);
    }
  }
  calculateJupiterExpectancy(jupiterAge, localAgeExp){
    const jupiterExp = ((localAgeExp / 11.86) - (this.jupiterAge));
    if (jupiterExp <= 0) {
      return ("You're already dead on this planet!");
    } else {
      return jupiterExp.toFixed(2);
    }
  }
}
