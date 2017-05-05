// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.



var timerUI = {
  drawNumericDisplay: function(timerValue){

    document.getElementById('numeric-display').textContent = timerValue;
   var numericDisplay = document.getElementById('numeric-display');

   numericDisplay.textContent = timerValue;

     if (timerValue <= 10) {

     numericDisplay.style.color = 'red';

   var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
   console.log(newSize);
     numericDisplay.style.fontSize = newSize + 'em';
    }
  },


  drawProgressBars: function(timerValue){
    document.getElementById('progress-bar');
    var progressBar = document.getElementsByClassName('progress-bar');
    console.log(progressBar);
    progressBar[0].style.width = timerValue + '%';

  },
  drawLitFuses: function(timerValue){
    console.log('TRAVIS');
  },
  drawCrawlers: function(timerValue){
    //// MVP
    var timeElapsed = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';
    // REACH
    var timeElapsed = 100 - timerValue;
    var crawlers = document.getElementsByClassName('crawler');
    for (var i = 0; i < crawlers.length; i++) {
      if (timerValue%2 === 0) {
        crawlers[i].style.marginTop = '0px';
      }
      else {
        crawlers[i].style.marginTop = '10px';
      }
      crawlers[i].style.marginLeft = (timeElapsed*10) + 'px';
    }
  }
};
