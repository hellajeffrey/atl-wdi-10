


var makeChange = function(price, payment) {
  var changeLeft = Math.round(100*payment - 100*price);
  if (changeLeft < 0) {return [0,0,0,0]};
  var results = [], quantity;
  [25, 10, 5, 1].forEach(function(val){
    quantity = Math.floor(changeLeft/val);
    changeLeft -= quantity * val;
    results.push(quantity);
  });
  return results;

};

var calc = [7,8, 9]
console.log(makeChange(calc));



/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
