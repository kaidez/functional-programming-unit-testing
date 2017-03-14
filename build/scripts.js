var sayBigDeal = function() {
  var message = "I'm kind of a big deal";
  log(message);
}

log("I'm kind of a big deal");

doSomething(sayBigDeal);

initialiseCarousel('kitten', 3000);

var someCarousel = new Carousel('carousel-one', 5435);
someCarousel.init();

var testCarousel = initialiseCarousel('main-carousel', 3000);
console.log(testCarousel instanceof Carousel);
console.log(testCarousel.constructor);

addMagic('unicorn', spin);
addMagic('fairy', sparkle);
addMagic('kitten', rainbow);