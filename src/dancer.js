// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

Dancer.prototype.step = function (timeBetweenSteps) {
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
  var that = this;
  setTimeout(function () { that.step.call(that, timeBetweenSteps);}, timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.offset(styleSettings);
};

Dancer.prototype.blowUp = function () {
  $(this.$node).effect('explode');
  $(this.$node).remove();
};
