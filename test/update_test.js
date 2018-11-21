const assert = require('assert');
const MarioChar = require('../models/karakter');

//Describe tests
describe('Updating Records', function(){
  var char;
  beforeEach(function(done){
    char = new MarioChar({
    name: 'Gönenç',
    weight: 70
    });
    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });
//Create tests
  it('Updates one record from the database', function(done){
    MarioChar.findOneAndUpdate({name: 'Gönenç'}, {name: 'Devrim'}).then(function(){
     MarioChar.findOne({_id: char._id}).then(function(result){
       assert(result.name === 'Devrim');
       done();
     });
   });
 });

 it('Increments the weight by 1', function(done){
   MarioChar.update({}, { $inc: { weight: 1 }}).then(function(){
    MarioChar.findOne({name: 'Gönenç'}).then(function(result){
      assert(result.weight === 71);
      done();
    });
  });
});

});
