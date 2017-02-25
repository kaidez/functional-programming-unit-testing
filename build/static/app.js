"use strict";

var log = function(someVariable) {
  if((typeof someVariable != "string") || (someVariable.length <= 0)) {
    throw new Error("expecting a string with at least one character");
  } else {
    console.log(someVariable);
    return someVariable;
  }
};

var doSomething = function(someFunction) {
  return someFunction();
}

/* Pass undefined as the last parameter to prevent extra params being
 * passed...old skool Paul Irish hack: http://bit.ly/2mpRQ4o
 */
function Carousel(getElement, spinDuration, undefined) {
  this.getElement = getElement;
  this.spinDuration = spinDuration;

  if((typeof getElement != "string") || (typeof spinDuration != "number") || (arguments.length != 2)) {
    throw new Error("Carousel() takes exactly 2 parameters: the first one (getElement) must be a string, the second one (spinDuration) must be a number");
  } else {
    return this;
  }
}

Carousel.prototype.init = function(){
  var getSlider = document.getElementById(this.getElement);
  return getSlider.innerHTML = "The slider's working...";
};

function addMagic(el, target, text, className) {
  var setElement = document.createElement(el);
  var findElement = document.getElementById(target);
  setElement.innerHTML = text;
  setElement.setAttribute("class", className);
  findElement.appendChild(setElement);
};
