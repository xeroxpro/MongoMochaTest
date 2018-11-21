const assert = require('assert');
const MarioChar = require('../models/karakter');

//Describe tests
describe('Finding Records', function(){
  var char;
  beforeEach(function(done){
    char = new MarioChar({
    name: 'Gönenç'
    });
    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });
//Create tests
  it('Finds one record from the database', function(done){
    MarioChar.findOne({ name: 'Gönenç'}).then(function(result){
     assert(result.name === 'Gönenç');
     done();
   })
 });
  it('Finds one record by ID from the database', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
