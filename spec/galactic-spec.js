import { GalacticAge } from './../js/super-galactic.js';
import moment from 'moment';

//testing suite
describe('GalacticAge', function(){
  const newUser = new GalacticAge();
  it('should convert age in Earth years to seconds', function(){
    expect(newUser.calculateAgeInSeconds(4)).toEqual(126144000);
  });




});//suite
