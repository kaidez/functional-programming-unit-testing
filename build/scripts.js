'use strict';

log("I'm kind of a big deal");

var sayBigDeal = function() {
  var message = "I'm kind of a big deal";
  log(message);
}

doSomething(sayBigDeal);

initialiseCarousel('kitten', 3000);

var someCarousel = new Carousel('carousel-one', 5435);
someCarousel.init();

var testCarousel = initialiseCarousel('main-carousel', 3000);

addMagic('unicorn', spin);
addMagic('fairy', sparkle);
addMagic('kitten', rainbow);