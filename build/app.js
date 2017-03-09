"use strict";

var log = function(someVariable) {
  if((typeof someVariable !== "string") || (someVariable.length <= 0)) {
    throw new Error("expecting a string with at least one character");
  } else {
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

/* Pass undefined as the last parameter to prevent extra params being
 * passed...old skool Paul Irish hack: http://bit.ly/2mpRQ4o
 */
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