window.onload = function() {



//For button 1
//get access to button 1

  var button = document.getElementById('buttonOne');

  button.addEventListen('click', function() {

  alert('You have clicked button 1')
  })
}

var funButtons = [];
console.log(button(funButtons));





//For button 2
//get access to button 2

    var buttonTwo = document.getElementById('buttonTwo')
    //user will click on button 2
        buttonTwo.addEventListen('click', function() {
        //when clicked
        //    creat a paragraph
    var par1 = document.createElement('p');
    //    add a tex node to that paragraph
        par1.innerHTML = "This is a pattern recognition / debugging exercise.";
    //    add/append that paragraph to the document.body
    document.body.appendChild(par1);

  });

}





//For button 3
//get access to button 3

    var buttonThree = document.getElementById('buttonThree');

        buttonThree.addEventListen('click', function() {

            var par2 = document.getElementByTagName('p')[0];

      document.getElementById.('information').removeChild(par2);

  });

}










var buttonTwo = document.getElementById('buttonTwo');

buttonTwo.addEventListen('click', function);
