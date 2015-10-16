
//  *********** GAME VARIABLES ********************* //

var pabloScenarioOne = "Pablo gets stopped at the bridge by Colombian police. The truck he is carrying is filled with stolen good. What's it going to be?  Plata o Plombo?"
var pabloResultOne = "They took your offer and let you pass";
var pabloChoiceOne = "Give them lead"
var pabloChoiceTwo = "Give them Silver";

var pabloScenarioTwo = "The Guerilla Group M-19 have started raids on your labs. What are you gonna do first?";
var pabloResultTwo = "starting with the low level guys - causes the leader  of m-19 to surrender"
var twoChoiceOne = "find their leader";
var twoChoiceTwo = "start with low level m-19 and get revenge";

var pabloScenarioThree = "You have been sitting in panama for 6 months. Waiting for revenge";
var pabloResultThree = "you make a deal with the government allowing you to build your own prison"
var threeChoiceOne = "Head Back to Colombia";
var threeChoiceTwo = "Hang out here for 3 more months";

var pabloScenarioFour = "The Cali Cartel has offered a settlement of $10 million. You wanted $100 million";
var pabloResultFour = "You kill them all"
var fourChoiceOne = "Go to war with Cali";
var fourChoiceTwo = "Head back to the negotiating table";

var pabloScenarioFive = "You suspect your top deputies of stealing behind your back";
var pabloResultFive = "An Example was made"
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
      },2000);
  })

  getButtonTwo.addEventListener("click", function(){
      getResult.innerHTML = (gameOver);
      setTimeout(function() {
      startGame();
      getResult.innerHTML = ('');
          },2000);
  })
}


var scenarioOptionsFour = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var getResult = document.querySelector(".results");

  getScenario.innerHTML = (pabloScenarioFour);
  getButtonOne.innerHTML = (fourChoiceOne);
  getButtonTwo.innerHTML = (fourChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getResult.innerHTML = (pabloResultFour);
      setTimeout(function() {
        scenarioOptionsFive();
        getResult.innerHTML = ('');
      },2000);
  })
  getButtonTwo.addEventListener("click", function(){
      getResult.innerHTML = (gameOver);
      setTimeout(function() {
      startGame();
      getResult.innerHTML = ('');
    },4000);
  })
}



var scenarioOptionsThree = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var getResult = document.querySelector(".results");

  getScenario.innerHTML = (pabloScenarioThree);
  getButtonOne.innerHTML = (threeChoiceOne);
  getButtonTwo.innerHTML = (threeChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getResult.innerHTML = (pabloResultThree);
      setTimeout(function() {
        scenarioOptionsFour();
        getResult.innerHTML = ('');
      },2000);
  })

  getButtonTwo.addEventListener("click", function(){
      getResult.innerHTML = (gameOver);
      setTimeout(function() {
      startGame();
      getResult.innerHTML = ('');
    },4000);
  })
}



var scenarioOptionsTwo = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var getResult = document.querySelector(".results");

  getScenario.innerHTML = (pabloScenarioTwo);
  getButtonOne.innerHTML = (twoChoiceOne);
  getButtonTwo.innerHTML = (twoChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getResult.innerHTML = (pabloResultTwo);
      setTimeout(function() {
        scenarioOptionsThree();
        getResult.innerHTML = ('');
      },2000);
  })

  getButtonTwo.addEventListener("click", function(){
      getResult.innerHTML = (gameOver);
      setTimeout(function() {
      startGame();
      getResult.innerHTML = ('');
    },4000);
  })

}


var scenarioOptionsOne = function() {
  var getScenario = document.querySelector(".main-container");
  var getButtonOne = document.getElementById("choiceOne");
  var getButtonTwo = document.getElementById("choiceTwo");
  var getResult = document.querySelector(".results");

  getScenario.innerHTML = (pabloScenarioOne);
  getButtonOne.innerHTML = (pabloChoiceOne);
  getButtonTwo.innerHTML = (pabloChoiceTwo);

  getButtonOne.addEventListener("click", function(){
      getResult.innerHTML = (pabloResultOne);
      setTimeout(function() {
        scenarioOptionsTwo();
        getResult.innerHTML = ('');
      },2000);
})

  getButtonTwo.addEventListener("click", function(){
      getResult.innerHTML = (gameOver);
      setTimeout(function() {
      startGame();
      getResult.innerHTML = ('');
    },4000);
  })

}
var startGame = function(){
  scenarioOptionsOne();

var bmf = document.getElementById("soundtrack");
bmf.play();open
}
startGame();
