"use strict";

var log = function(someVariable) {
  if((typeof someVariable !== "string") || (someVariable.length <= 0)) {
    throw new Error("expecting a string with at least one character");
  } else {
    console.log(someVariable);
    return someVariable;
  }
};

var doSomething = function(someFunction) {
  if(!$.isFunction(someFunction)) {
    throw new Error("doSomething's parameter must be a function");
  } else {
    return someFunction();
  }
};

function Carousel(getElement, spinDuration) {
  this.getElement = getElement;
  this.spinDuration = spinDuration || 3000;
  if(this.getElement === undefined) {
    throw new Error("Carousel needs to know what element to load into");
  } else {
    return this;
  }
}

Carousel.prototype.init = function() {
  var getCarousel = document.getElementById(this.getElement);
  getCarousel.innerHTML = "The " + this.getElement + " carousel has started.";
};

function initialiseCarousel(id, frequency) {
  var slider = new Carousel(id, frequency);
  slider.init();
  return slider;
}

var addMagic = function (id, effect) {
  if(!id || !effect) {
    throw new Error("addMagic() needs an id and effect parameter");
  } else {
    var element = document.getElementById(id);
    element.className += ' magic';
    return effect(element);
  }
}

function spin(element){
  element.innerHTML = "spinning...";
}

function sparkle(element){
  element.innerHTML = "sparkling...";
}

function rainbow(element){
  element.innerHTML = "rainbowing...";
}