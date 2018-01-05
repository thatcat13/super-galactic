


// export class GalacticAge {
//   constructor(currentAge, currentDate) {
//     this.currentAge = currentAge;
//     this.currentDate = currentDate;
//     this.planetAge = planetAge;
//   }
//
//   calculateSeconds(age){
//     return (age * 31,536,000);
//   };
// };

function GalacticAge(currentAge, currentDate){
      this.currentAge = currentAge;
      this.currentDate = currentDate;
      this.planetAge = planetAge;
}

GalacticAge.prototype.calculateSeconds(age){
  return age * 31,536,000;
}

exports.galacticModule = GalacticAge;
