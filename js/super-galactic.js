
import moment from 'moment';

export class GalacticAge {
  constructor(mm, dd, yyyy) {
    this.mm = mm;
    this.dd = dd;
    this.yyyy = yyyy;
    this.currentAge = this.calculateCurrentAge();
    this.mercuryAge = this.calculateMercuryAge();
    this.venusAge = this.calculateVenusAge();
    this.marsAge = this.calculateJupiterAge();
  }

  calculateAgeInSeconds(ageInYears){
    return (ageInYears * 31536000);
  }

  calculateCurrentAge(){
    const birthdate = [];
    birthdate.push(this.mm, this.dd, this.yyyy);
    const currentAge = moment(birthdate, "MM-DD-YYYY").fromNow(true).split(" ")[0];
    return currentAge;
  }

  calculateMercuryAge(){
    const mercuryAge = this.currentAge / 0.24;
    this.mercuryAge = Math.floor(mercuryAge);
    return mercuryAge;
  }

  calculateVenusAge(){
    const venusAge = this.currentAge / 0.62;
    this.venusAge = Math.floor(venusAge);
    return venusAge;
  }
  calculateMarsAge(){
    const marsAge = this.currentAge / 1.88;
    this.marsAge = Math.floor(marsAge);
    return marsAge;
  }
  calculateJupiterAge(){
    const jupiterAge = this.currentAge / 11.86;
    this.jupiterAge = Math.floor(jupiterAge);
    return jupiterAge;
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
