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

function Carousel(element, spinDuration) {
  this.element = element;
  this.spinDuration = spinDuration;

  if((typeof element != "string") || (typeof spinDuration != "number")) {
    // throw new Error("element should be a string, spinDuration should be a number");
    console.log("foo");
  } else {
    return this;
  }
}

function addMagic(el, target, text, className) {
  var setElement = document.createElement(el);
  var findElement = document.getElementById(target);
  setElement.innerHTML = text;
  setElement.setAttribute("class", className);
  findElement.appendChild(setElement);
};
