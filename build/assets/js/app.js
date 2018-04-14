// slow move to anchrors
$(document).ready(function() {
  $("#menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
});

$(document).ready(function() {
  $("#fixed").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
});

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true // reset animation on end (default is true)
});
wow.init();

// ajax
var submitForm = function(e) {
  e.preventDefault();
  var form = $(e.target),
    data = form.serialize(),
    url = form.attr("action");
  var request = $.ajax({
    type: "POST",
    url: url,
    data: data,
    dataType: "JSON"
  });
  request.done(function(msg) {
    var mes = msg.mes,
      status = msg.status;
    if (status === "OK") {
      form.append('<p class="success">' + mes + "</p>");
    } else {
      form.append('<p class="error">' + mes + "</p>");
    }
  });
  request.fail(function(jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
  });
};
$("#form").on("submit", submitForm);



//slider
$(function(){
  $('.service__slider').bxSlider({
    captions: true
  });
});
