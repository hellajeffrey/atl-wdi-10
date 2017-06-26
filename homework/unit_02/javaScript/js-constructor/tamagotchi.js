console.log('tamagotchi file is loaded');

var Tamagotchi = function(name, creatureType){
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function() {
    this.foodInTummy--;
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
    console.log("WAHH!!!");
  };

  this.puke = function() {
    this.foodInTummy--;
    console.log(this.name + ' has current food in tummy = ' + this.cry);
  };

  this.yawn = function() {
    this.restedness--;
    console.log(this.name + ' has current restedness = ' + this.restedness);
  };

  this.start = function(){
    console.log("Starting " + this.name);
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  };

  this.stop = function() {
    console.log("Stopping " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  };
};

//create new Tamagotchis
var constructedObject1 = new Tamagotchi();
var constructedObject2 = new Tamagotchi();

//console log the new Objects to check them out
console.log(constructedObject1);
console.log(constructedObject2);

//Invoke methods on the constructed objects:
constructedObject1.cry();
constructedObject2.cry();

//test out your Tamagotchies below via console.logs
