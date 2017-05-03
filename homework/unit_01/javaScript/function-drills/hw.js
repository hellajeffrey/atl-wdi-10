// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////





// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0

var sumOfNums = function(numsArray) {
  var sum = 0;
    for (var i = 0; i < numsArray.length; i++) {
      sum += numsArray[i];
  }
  return sum;

};

var numAr = [0,1,23,12,4,5];
console.log(sumOfNums(numAr));





// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10

function numbersGreaterThanTen (numsArray) {
  var newArrayOfNumbersGreaterThanTen = [];
    for(var i = 0; i < numsArray.length; i++) {

      var numberToCheck = numsArray[i];
          if(numberToCheck > 10) {

        newArrayOfNumbersGreaterThanTen.push(numberToCheck);
      }
    }

  return newArrayOfNumbersGreaterThanTen;
}

var arrayOfNumbers = [20, 30, 1, 2, 3];
console.log(numbersGreaterThanTen(arrayOfNumbers));





// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.

var allGreaterThanTen = function(numsArray){
  for (var i = 0; i < numsArray.length; i++) {
    if (!(numsArray[i] > 10)) {
      return false;

    }
  }
    return true;

};

var num = [11,12,13, 1];
console.log(allGreaterThanTen(num));





// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters

var wordsWithAtLeastFiveLetters = function(words) {
  var results = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      results.push(words[i]);
    }
  }
  return results;
};


var pig = ['fat', 'nasty'];
console.log(wordsWithAtLeastFiveLetters(pig))





// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.

var allStartingWithA = function(words){
  for (var i = 0; i < words.length; i++) {
    if ((!words[i].slice(0, 1) === 'a' || words[i].slice(0, 1) === 'A')) {

      return false;
  }
}

return true;

};

var startA = ['apple', 'oranges'];
console.log(allStartingWithA(startA));





// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise

var anyStartingWithB = function(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].slice(0, 1) === 'b' || words[i].slice(0, 1) === 'B') {
      return true;
    }
  }
  return false;

};

var bWords = ["bench", "toys", "cakes"];
console.log(anyStartingWithB(bWords));





// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.

var hasAtLeastNVowels = function(word, n){
  // Your Code Here
};





// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels

var wordsWithAtLeastTwoVowels = function(words) {
  var results = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i], 2) {
      results.push(words[i]);
    }
  }
  return results;

};

var twoVowels = ["booth"];
console.log(wordsWithAtLeastTwoVowels(twoVowels));





// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.

var allHaveAtLeastTwoVowels = function(words) {
  for (var i = 0; i < words.length; i++) {
    if (!(words[i], 2)) {
      return false;
    }
  }
  return true;

};

var twoVowels = ["around", "tree"];
console.log(allHaveAtLeastTwoVowels(twoVowels));




// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.

var anyHaveAtLeastTwoVowels = function(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i], 2) {
      return true;
    }
  }
  return false;

};

var twoVowels = ["chickens", "dingos"];
console.log(anyHaveAtLeastTwoVowels(twoVowels));





// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.

var noneHaveTwoOrMoreVowels = function(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i], 2) {
      return false;
    }
  }
  return true;

};

var oneVowel = ["dog", "cats"];
console.log(noneHaveTwoOrMoreVowels(oneVowel));





// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}

var buildObjectFromWords = function(words) {
  var result = {};
  for (var i = 0; i < words.length; i++) {
    result[words[i]] = words[i].length;
  }
  return result;
};

var wordBuilder = ['jeffrey', 'david', 'wonderful'];
console.log(buildObjectFromWords(wordBuilder));








/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
