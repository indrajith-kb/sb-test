// Set Global Namespace = SBobj
var SBObj = window.SBObj || {};
var width = jQuery(window).width();
var height = jQuery(window).height();
var Base_uri = window.location.origin;
var base_path = '/';
console.log('started');
SBObj.burger_menu = function () {
  jQuery('.burger-menu').click(function(){
    jQuery(this).toggleClass('open');
    jQuery('.menu').slideToggle();
  });

}


jQuery(document).ready(function(){
  SBObj.burger_menu();
});