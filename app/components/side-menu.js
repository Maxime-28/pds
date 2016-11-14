import Ember from 'ember';

export default Ember.Component.extend({
});

Ember.$(document).ready(function () {

  //stick in the fixed 100% height behind the navbar but don't wrap it
  Ember.$('#slide-nav.navbar .container').append(Ember.$('<div id="navbar-height-col"></div>'));

  // Enter your ids or classes
  var toggler = '.navbar-toggle';
  var pagewrapper = '#page-content';
  var navigationwrapper = '.navbar-header';
  //var menuwidth = '100%'; // the menu inside the slide menu itself
  var slidewidth = '70%';
  var menuneg = '-100%';
  var slideneg = '-70%';


  Ember.$("#slide-nav").on("click", toggler, function () {

    var selected = Ember.$(this).hasClass('slide-active');

    Ember.$('#slidemenu').stop().animate({
      left: selected ? menuneg : '0px'
    });

    Ember.$('#navbar-height-col').stop().animate({
      left: selected ? slideneg : '0px'
    });

    Ember.$(pagewrapper).stop().animate({
      left: selected ? '0px' : slidewidth
    });

    Ember.$(navigationwrapper).stop().animate({
      left: selected ? '0px' : slidewidth
    });


    Ember.$(this).toggleClass('slide-active', !selected);
    Ember.$('#slidemenu').toggleClass('slide-active');


    Ember.$('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


  });


  var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


  Ember.$(window).on("resize", function () {

    if (Ember.$(window).width() > 767 && Ember.$('.navbar-toggle').is(':hidden')) {
      Ember.$(selected).removeClass('slide-active');
    }


  });

});
