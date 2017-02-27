"use strict";

var buildArticles = function(someFunction) {
  if(typeof someFunction != "function") {
    typeof someFunction === "function";
  }
  return someFunction;
}

var buildList = function(getArray, targetElement) {

  var getTarget = document.getElementById(targetElement),
      list = document.createElement("ul");

  getArray.forEach(function(i){
    var listItem = document.createElement("li");
    listItem.innerHTML = i;
    list.appendChild(listItem);
  });

  return getTarget.appendChild(list);

}
