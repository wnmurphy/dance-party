$(document).ready(function (){
  window.dancers = [];

  $(".addDancerButton").on("click", function (event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $("#lineUpButton").on("click", function () {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.setPosition(top, 0);
    }
  });

  $(document).keydown(function (event) {
    if(event.which === 84){
      $(".secret").click();
    }
  });

  $(document).on("click", "span", function () {
    var $span = $(this);
    $(document).mousemove(function (event) {
      $span.css({ top: event.pageY + 3, left: event.pageX + 3 });
    });
    $(document).on('keydown', function (keyEvent) {
      if (keyEvent.which === 27) { $(document).off('mousemove'); }
    });
  });

});
