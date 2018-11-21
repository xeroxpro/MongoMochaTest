const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/karakter');

//Describe tests
describe('Saving records', function(){

  //Create tests
  it('Saves a record to the database', function(done){
    var char = new MarioChar({
      name: "Gönenç"
    });
    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });

});
