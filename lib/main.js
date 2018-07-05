"use strict";
"Use strict";

var navwhite = document.getElementById("navwhite", "navwhite1", "navwhite2");
var navwhitetStyle = navwhite.style;

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

//toggle func
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#' + burger.dataset.target);

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    //this function makes the menu change color
    if (burger.classList.contains('is-active')) {
      navwhite.style.color = "#daa863";
      navwhite1.style.color = "#daa863";
      navwhite2.style.color = "#daa863";
    } else {
      navwhite.style.color = "#fff";
      navwhite1.style.color = "#fff";
      navwhite2.style.color = "#fff";
    }

    // navwhite.style.color = "#807d63";
    // navwhite1.style.color = "#807d63";
    // navwhite2.style.color = "#807d63";
  });
})();