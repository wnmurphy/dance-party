var BombDancer = function(top, left, timeBetweenSteps){
  //Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bombDancer"></span>');
  this.setPosition(top, left);
  this.$node.append('<img src="img/mario_bomb.png">');
  setTimeout(this.step.bind(this),500);
};

BombDancer.prototype = Object.create(Dancer.prototype);
BombDancer.prototype.constructor = BombDancer;
BombDancer.prototype.step = function(){
  var dancers = window.dancers;
  var context = this;
  for (var i = 0; i < dancers.length; i++) {
    var dancer = dancers[i];
    if (context.getDistance(dancer) < 400) {
      dancer.blowUp();
    }
  };
};
BombDancer.prototype.getDistance = function(dancer) {
  var context = this;
  var x = Math.abs(context.$node.offset().left - dancer.$node.offset().left);
  var y = Math.abs(context.$node.offset().top - dancer.$node.offset().top);
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2)); //Pythagoras
};
