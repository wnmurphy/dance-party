var FadeDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fadeDancer"></span>');
  this.setPosition(top, left);
};

FadeDancer.prototype = Object.create(Dancer.prototype);
FadeDancer.prototype.constructor = FadeDancer;
FadeDancer.prototype.step = function (timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.fadeToggle();
};
