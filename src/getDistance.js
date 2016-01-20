var dancers = window.dancers;
for (var i = 0; i < dancers.length; i++) {
  var dancer = dancers[0];

};

var getDistance = function(dancer1, dancer2) {
  var x = Math.abs(dancer1.$node.offset().left - dancer2.$node.offset().left);
  var y = Math.abs(dancer1.$node.offset().top - dancer2.$node.offset().top);
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2)); //Pythagoras
};