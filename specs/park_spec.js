const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurrassic World', 60);
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 200);
    dinosaur2 = new Dinosaur('Veloceraptor', 'carnivore', 100);
    dinosaur3 = new Dinosaur('Stegosaurus', 'herbivore', 140);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrassic World');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 60);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.starAttraction;
    assert.strictEqual(actual, [dinosaur1])
  });

  xit('should be able to find all dinosaurs of a particular species', function(){

  });

  xit('Calculate the total number of visitors per day', function(){

  })

  xit('Calculate the total number of visitors per year', function(){

  })

  xit('Calculate the total revenue from ticket sales for one year', function(){

  })

  xit('should be able to remove all dinosaurs of a particular species', function(){

  });

  xit('Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){

  });


});
