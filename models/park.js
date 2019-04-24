const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurs.pop();
};

Park.prototype.starAttraction = function () {
  
  }
};
module.exports = Park;
