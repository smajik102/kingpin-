
//  *********** GAME VARIABLES ********************* //

var pabloScenarioOne = "Pablo gets stopped at the bridge by Colombian police. The truck he is carrying is filled with stolen good. What's it going to be?  Plata o Plombo?"
var pabloChoiceOne = "Give them lead"
var pabloChoiceTwo = "Give them Silver";

var pabloScenarioTwo = "The Guerilla Group M-19 have started raids on your labs. What are you gonna do first?";
var twoChoiceOne = "find their leader";
var twoChoiceTwo = "start with low level m-19 and get revenge";

var pabloScenarioThree = "You have been sitting in panama for 6 months. Waiting for revenge";
var threeChoiceOne = "Head Back to Colombia";
var threeChoiceTwo = "Hang out here for 3 more months";

var pabloScenarioFour = "The Cali Cartel has offered a settlement of $10 million. You wanted $100 million";
var fourChoiceOne = "Go to war with Cali";
var fourChoiceTwo = "Head Back to the negotiating table";

var pabloScenarioFive = "You suspect your top deputies of stealing behind your back";
var fiveChoiceOne = "Make an example of them";
var fiveChoiceTwo = "Wait and see if there is more evidence";

//////////////////////////////////////////////

var scenarioOptionsFive = function() {
  var getScenario = document.querySelector(".main-container");
  getScenario.innerHTML = (pabloScenarioFive);

    var getButtonOne = document.getElementById("choiceOne");
    getButtonOne.innerHTML = (fiveChoiceOne);
    getButtonOne.addEventListener("click");

    var getButtonTwo = document.getElementById("choiceTwo");
    getButtonTwo.innerHTML = (fiveChoiceTwo);
  }


var scenarioOptionsFour = function() {
  var getScenario = document.querySelector(".main-container");
  getScenario.innerHTML = (pabloScenarioFour);

    var getButtonOne = document.getElementById("choiceOne");
    getButtonOne.innerHTML = (fourChoiceOne);
    getButtonOne.addEventListener("click",scenarioOptionsFive);

    var getButtonTwo = document.getElementById("choiceTwo");
    getButtonTwo.innerHTML = (fourChoiceFour);
  }



var scenarioOptionsThree = function() {
  var getScenario = document.querySelector(".main-container");
  getScenario.innerHTML = (pabloScenarioThree);

    var getButtonOne = document.getElementById("choiceOne");
    getButtonOne.innerHTML = (threeChoiceOne);
    getButtonOne.addEventListener("click",scenarioOptionsFour);

    var getButtonTwo = document.getElementById("choiceTwo");
    getButtonTwo.innerHTML = (threeChoiceTwo);
  }



var scenarioOptionsTwo = function() {
  var getScenario = document.querySelector(".main-container");
  getScenario.innerHTML = (pabloScenarioTwo);

    var getButtonOne = document.getElementById("choiceOne");
    getButtonOne.innerHTML = (twoChoiceOne);
    getButtonOne.addEventListener("click",scenarioOptionsThree);

    var getButtonTwo = document.getElementById("choiceTwo");
    getButtonTwo.innerHTML = (twoChoiceTwo);
}


var scenarioOptionsOne = function() {
  var getScenario = document.querySelector(".main-container");
  getScenario.innerHTML = (pabloScenarioOne);

  var getButtonOne = document.getElementById("choiceOne");
  getButtonOne.innerHTML = (pabloChoiceOne);
  getButtonOne.addEventListener("click", scenarioOptionsTwo);

  var getButtonTwo = document.getElementById("choiceTwo");
  getButtonTwo.innerHTML = (pabloChoiceTwo);
}

var startGame = function(){
  scenarioOptionsOne();

var bmf = document.getElementById("soundtrack");
bmf.play();open

}

startGame();
