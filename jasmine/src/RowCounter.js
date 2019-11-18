RowCounter = function() {
  this.leftValue = 0
  this.rightValue = 0
}

RowCounter.prototype.increaseRight = function() {
  if(this.rightValue === 9) {
    this.rightValue = 0
  } else {
    this.rightValue += 1;
  };
};

RowCounter.prototype.increaseLeft = function() {
  if(this.leftValue === 9) {
    this.leftValue = 0
  } else {
    this.leftValue += 1;
  };
};
