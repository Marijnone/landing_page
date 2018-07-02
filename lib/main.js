'use strict';

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
  });
})();