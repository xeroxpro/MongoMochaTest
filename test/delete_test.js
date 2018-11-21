const assert = require('assert');
const MarioChar = require('../models/karakter');

//Describe tests
describe('Deleting Records', function(){
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
  it('Deletes one record from the database', function(done){
    MarioChar.findOneAndRemove({ name: 'Gönenç'}).then(function(){
     MarioChar.findOne({ name: 'Gönenç'}).then(function(result){
       assert(result === null);
       done();
     });
   });
 });
})
