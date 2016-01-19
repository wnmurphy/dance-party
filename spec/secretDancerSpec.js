describe("secretDancer", function() {

  var secretDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    secretDancer = new SecretDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(secretDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have an image", function() {
    expect(!!secretDancer.$node.find('img')).to.equal(true);
  });

  it("should have a step function that makes its node scale", function() {
    sinon.spy(secretDancer.$node, 'transform');
    secretDancer.step();
    expect(secretDancer.$node.css('transform')).to.be.equal('scale(1.5)');
  });

  describe("dance", function(){
    it("should call step at least five times per second", function(){
      sinon.spy(secretDancer, "step");
      expect(secretDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(secretDancer.step.callCount).to.be.equal(5);

      clock.tick(timeBetweenSteps);
      expect(secretDancer.step.callCount).to.be.equal(10);
    });
  });
});
