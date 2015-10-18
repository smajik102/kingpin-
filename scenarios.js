
//  *********** GAME VARIABLES ********************* //
var pabloChoiceOne = "Give them Silver"
var pabloChoiceTwo = "Give them Lead";

var twoChoiceOne = "start hunting for ivan";
var twoChoiceTwo = "form the group death to kidnappers";

var threeChoiceOne = "lawyer up and file a defamation suit";
var threeChoiceTwo = "resign and go back to being a bandito";

var fourChoiceOne = "Retaliate against the Search Bloc";
var fourChoiceTwo = "Send A Message to Pacho Herrera of Cali Cartel";

var fiveChoiceOne = "Make an example of them";
var fiveChoiceTwo = "Wait and see if there is more evidence";

var gameOver = "Damn you got locked up - Try Again";

//////////////////////////////////////////////

var scenarioOptionsFive = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var getResult = document.querySelector(".results");

  getScenario.innerHTML = (pabloScenarioFive);
  getButtonOne.innerHTML = (fiveChoiceOne);
  getButtonTwo.innerHTML = (fiveChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getResult.innerHTML = (pabloResultFive);
      setTimeout(function() {
        scenarioOptionsFive();
        getResult.innerHTML = ('');
      },4000);
  })

  getButtonTwo.addEventListener("click", function(){
      getResult.innerHTML = (gameOver);
      setTimeout(function() {
      startGame();
      getResult.innerHTML = ('');
    },4000);
  })
}

var scenarioOptionsFour = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var pabloResultFour = document.createElement("IMG");
  var pabloScenarioFour = document.createElement("IMG");

  pabloResultFour.src = "images/cali.jpg";
  pabloResultFour.width = "600";
  pabloResultFour.height = "400";

  getScenario.innerHTML = ("");
  pabloScenarioFour.src = "images/gustavo.jpg"
  pabloScenarioFour.width = "600";
  pabloScenarioFour.height = "400";
  getScenario.appendChild(pabloScenarioFour);


  getButtonOne.innerHTML = (fourChoiceOne);
  getButtonTwo.innerHTML = (fourChoiceTwo);

  getButtonTwo.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.appendChild(pabloResultFour);
      setTimeout(function() {
        scenarioOptionsFive();
      },4000);
})

  getButtonOne.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.innerHTML = (gameOver);
      setTimeout(function() {
        getScenario.innerHTML = ("");
        scenarioOptionsOne();
    },4000);
  })

}

var scenarioOptionsThree = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var pabloResultThree = document.createElement("IMG");
  var pabloScenarioThree = document.createElement("IMG");

  pabloResultThree.src = "images/ivan.jpg";
  pabloResultThree.width = "600";
  pabloResultThree.height = "400";

  getScenario.innerHTML = ("");
  pabloScenarioThree.src = "images/m19.jpg"
  pabloScenarioThree.width = "600";
  pabloScenarioThree.height = "400";
  getScenario.appendChild(pabloScenarioThree);


  getButtonOne.innerHTML = (fourChoiceOne);
  getButtonTwo.innerHTML = (fourChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.appendChild(pabloResultFour);
      setTimeout(function() {
        scenarioOptionsFour();
      },4000);
})

  getButtonTwo.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.innerHTML = (gameOver);
      setTimeout(function() {
        getScenario.innerHTML = ("");
        scenarioOptionsOne();
    },4000);
  })

}


var scenarioOptionsThree = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var pabloResultThree = document.createElement("IMG");
  var pabloScenarioThree = document.createElement("IMG");

  pabloResultThree.src = "images/pablo-revenge.jpg";
  pabloResultThree.width = "600";
  pabloResultThree.height = "400";

  getScenario.innerHTML = ("");
  pabloScenarioThree.src = "images/pablo-congress.jpg"
  pabloScenarioThree.width = "600";
  pabloScenarioThree.height = "400";
  getScenario.appendChild(pabloScenarioThree);


  getButtonOne.innerHTML = (threeChoiceOne);
  getButtonTwo.innerHTML = (threeChoiceTwo);

  getButtonTwo.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.appendChild(pabloResultThree);
      setTimeout(function() {
        scenarioOptionsFour();
      },4000);
})

  getButtonOne.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.innerHTML = (gameOver);
      setTimeout(function() {
        getScenario.innerHTML = ("");
        scenarioOptionsOne();
    },4000);
  })

}



var scenarioOptionsTwo = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var pabloResultTwo = document.createElement("IMG");
  var pabloScenarioTwo = document.createElement("IMG");

  pabloResultTwo.src = "images/ivan.jpg";
  pabloResultTwo.width = "600";
  pabloResultTwo.height = "400";

  getScenario.innerHTML = ("");
  pabloScenarioTwo.src = "images/m19.jpg"
  pabloScenarioTwo.width = "600";
  pabloScenarioTwo.height = "400";
  getScenario.appendChild(pabloScenarioTwo);


  getButtonOne.innerHTML = (twoChoiceOne);
  getButtonTwo.innerHTML = (twoChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.appendChild(pabloResultTwo);
      setTimeout(function() {
        scenarioOptionsThree();
      },4000);
})

  getButtonTwo.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.innerHTML = (gameOver);
      setTimeout(function() {
        getScenario.innerHTML = ("");
        scenarioOptionsOne();
    },4000);
  })

}


var scenarioOptionsOne = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var getResult = document.querySelector(".results");
  var pabloResultOne = document.createElement("IMG");
  var pabloScenarioOne = document.createElement("IFRAME");

  pabloResultOne.src = "images/soah8.gif";
  pabloResultOne.width = "600";
  pabloResultOne.height = "400";

  pabloScenarioOne.src = "https://www.youtube.com/embed/U7elNhHwgBU?rel=0&autoplay=1;controls=0&amp;start=15&end=26";
  pabloScenarioOne.width = "600";
  pabloScenarioOne.height = "396";
  getScenario.appendChild(pabloScenarioOne);


  getButtonOne.innerHTML = (pabloChoiceOne);
  getButtonTwo.innerHTML = (pabloChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.appendChild(pabloResultOne);
      setTimeout(function() {
        scenarioOptionsTwo();
      },4000);
})

  getButtonTwo.addEventListener("click", function(){
      getScenario.innerHTML = ("");
      getScenario.innerHTML = (gameOver);
      setTimeout(function() {
        getScenario.innerHTML = ("");
        scenarioOptionsOne();
    },4000);
  })

}

// var startGame = function(){
  scenarioOptionsOne();
// //
// var bmf = document.getElementById("soundtrack");
// bmf.play();
// }
// startGame();
