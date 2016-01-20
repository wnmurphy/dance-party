$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
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
  
  $("#lineUpButton").on("click", function() {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.setPosition(top, 0);
    }
  });

  $(document).keydown(function(event){
    if(event.which === 84){
      $(".secret").click();
    }
  });

  $(document).on("click", "span", function(){
    var $span = $(this);
    $(document).mousemove(function(event){
      $span.css({ top: event.pageY + 3, left: event.pageX + 3 });
    });
    $(document).on('keydown', function(keyEvent) {
      if (keyEvent.which === 27) { $(document).off('mousemove'); }
    });
  });  

});
