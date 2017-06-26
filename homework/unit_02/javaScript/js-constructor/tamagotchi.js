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
  }
}

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
