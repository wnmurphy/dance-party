var SecretDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="secretDancer"></span>');
  this.setPosition(top, left);
  this.$node.append('<img src="img/secret.gif">');
  this.scale = .25;
};

SecretDancer.prototype = Object.create(Dancer.prototype);
SecretDancer.prototype.constructor = SecretDancer;
SecretDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, 20);
  if (this.scale < 2){
    this.$node.css('transform', 'scale(' + (this.scale *= 1.1) + ')');
  }
};