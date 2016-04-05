var SpinDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinDancer"></span>');
  this.setPosition(top, left);
  this.rotation = 0;
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;
SpinDancer.prototype.step = function (timeBetweenSteps) {
  Dancer.prototype.step.call(this, 20);
  this.$node.css('transform', 'rotate(' + (this.rotation += 20) + 'deg)');
};
