console.log('tamagotchi file is loaded');

var Tamagotchi = function(){
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function() {
    this.foodInTummy--;
    console.log()
    console.log("WAH!");
  }
}

//create new Tamagotchis


//test out your Tamagotchies below via console.logs
