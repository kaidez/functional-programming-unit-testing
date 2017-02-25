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

function Carousel(getElement, spinDuration) {
  this.getElement = getElement;
  this.spinDuration = spinDuration;

  if((typeof getElement != "string") || (typeof spinDuration != "number")) {
    throw new Error("the first parameter (element) should be a string, the second parameter (spinDuration) should be a number");
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
