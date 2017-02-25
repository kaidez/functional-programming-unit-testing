function CreateElement(x, y){
  this.x = x;
  this.y = y;
  return x + y;
}

var log = function(someVariable) {
  if((typeof someVariable != "string") || (someVariable.length <= 0)) {
    throw new Error("expecting a string with at least one character")
  } else {
    console.log(someVariable);
    return someVariable;
  }
};

var doSomething = function(thing) {
    return thing();
}

function addMagic(el, target, text, className) {
  var setElement = document.createElement(el);
  setElement.innerHTML = text;
  setElement.setAttribute("class", className);
  var findElement = document.getElementById(target);
  findElement.appendChild(setElement);
};