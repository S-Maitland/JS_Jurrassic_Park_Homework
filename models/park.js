const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.starAttraction = function() {
  let mostVisitedDinosaur = this.dinosaurs[0];

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > mostVisitedDinosaur.guestsAttractedPerDay){
      mostVisitedDinosaur = dinosaur;
    };
  };
  return mostVisitedDinosaur;
};

Park.prototype.findBySpecies = function(species){
  const foundDinosaurs = [];

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species === species){
      foundDinosaurs.push(dinosaur);
    }
  }
  return this.dinosaurs;
};

Park.prototype.calculateAverageDailyVisitors = function () {
  let totalAverageDailyVisitors = 0;
  for (const dinosaur of this.dinosaurs){
    totalAverageDailyVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalAverageDailyVisitors;
};

Park.prototype.calculateAverageYearlyVisitors = function () {
  return this.calculateAverageDailyVisitors() * 365;
};

Park.prototype.calculateTotalRevenue = function () {
  return this.calculateAverageYearlyVisitors() * this.ticketPrice;
};

module.exports = Park;
