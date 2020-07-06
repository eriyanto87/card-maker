//assign variables
let image = document.getElementById("image");
let text = document.getElementById("text");
let card = document.getElementById(`card`);
let birthdayButton = document.getElementById(`birthdayButton`);
let backgroundButton = document.getElementById(`backgroundButton`);
let textButton = document.getElementById(`textButton`);
let sizeButton = document.getElementById(`sizeButton`);
let fontStyleButton = document.getElementById("fontStyleButton");
let balloon = document.getElementById("balloon");
let submit = document.getElementById("submit");
let message = document.getElementById("message");
let custom = document.getElementById("custom");
let backgroundColors = document.getElementById("backgroundColors");
let textColors = document.getElementById("textColors");
let event = document.getElementById("event");
let fontSize = document.getElementById("fontSize");


var birthdayTextFunction = function() {
  text.innerHTML = event.value;
  text.style.fontWeight = "900";
 };

birthdayButton.onclick = function(){
  birthdayTextFunction();
};

backgroundButton.onclick = function() {
  card.style.background = backgroundColors.value;
  
};

textButton.onclick = function() {
  text.style.color = textColors.value;
  custom.style.color = textColors.value;
};

sizeButton.onclick =  function() {
  text.style.fontSize = fontSize.value;
  custom.style.fontSize = fontSize.value;
};

fontStyleButton.onclick = function() {
  text.style.fontFamily =  "'Pangolin', cursive";
  custom.style.fontFamily = "'Pangolin', cursive";
};

balloon.onclick = function() {

  text.style.marginTop="0px"
  custom.style.paddingBottom="10px"
  image.innerHTML = "<img src='http://images.clipartpanda.com/balloon-clipart-pictures-balloon-clipart-transparent.png' width='250' height='250'>";
  
}

submit.onclick =  function() {
  custom.innerHTML = message.value;
}
