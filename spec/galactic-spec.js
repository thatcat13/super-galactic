import { GalacticAge } from './../js/super-galactic.js';
import moment from 'moment';


//testing suite
describe('GalacticAge', function(){
  const newUser = new GalacticAge(9, 30, 1975);


  it('should convert age in Earth years to seconds', function(){
    expect(newUser.calculateAgeInSeconds(4)).toEqual(126144000);
  });

  it('should calculate current age', function() {
    expect(parseInt(newUser.calculateCurrentAge())).toEqual(42);
  });

  it('should calculate mercury age', function() {
    expect(Math.floor(newUser.calculateMercuryAge())).toEqual(175);
  });
  it('should calculate venus age', function() {
    expect(Math.floor(newUser.calculateVenusAge())).toEqual(67);
  });
  it('should calculate mars age', function() {
    expect(Math.floor(newUser.calculateMarsAge())).toEqual(22);
  });
  it('should calculate jupiter age', function() {
    expect(Math.floor(newUser.calculateJupiterAge())).toEqual(3);
  });

});//suite
