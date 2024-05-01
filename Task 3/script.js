const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

function wantToDisplay(input) {
  display.value += input;
}
function clearDisplay(){
  display.value = "";
}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
  
}
function wantToDelete(){
  display.value = display.value.slice(0,-1);
}