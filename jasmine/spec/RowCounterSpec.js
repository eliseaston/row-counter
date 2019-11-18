describe("RowCounter", function() {
  beforeEach(function() {
    counter = new RowCounter();
  })

  it("should have a starting value of 00", function() {
    expect(counter.leftValue).toEqual(0);
    expect(counter.rightValue).toEqual(0);
  })

  it("can increase the right value by 1", function() {
    counter.increaseRight();
    expect(counter.rightValue).toEqual(1);
  })

  it("can increase the left value by 1", function() {
    counter.increaseLeft();
    expect(counter.leftValue).toEqual(1);
  })

  it("increases right value from 9 to 0", function() {
    for(i = 0; i < 10; i++) {
      counter.increaseRight();
    }
    expect(counter.rightValue).toEqual(0);
  })

  it("increases left value from 9 to 0", function() {
    for(i = 0; i < 10; i++) {
      counter.increaseLeft();
    }
    expect(counter.leftValue).toEqual(0);
  })
  
})
