var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function() {
  beforeEach(function() {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function() {
    assert.equal(true, true)
  })

  it('can add 1 to 4 and get 5', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('can subtract 4 from 7 and get 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('concatenate multiple number button clicks', function() {
    calculator.previousTotal = 0;
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 23)
  })

  it('chain multiple operations together', function() {
    calculator.previousTotal = 2;
    calculator.add(7);
    calculator.previousTotal = 9;
    calculator.subtract(3);
    assert.strictEqual(calculator.runningTotal, 6)
  })

  it('clear the running total without affecting the calculation', function() {
    calculator.previousTotal = 0;
    calculator.add(10);
    calculator.previousTotal = 10;
    calculator.clearClick();
    calculator.subtract(5);
    assert.strictEqual(calculator.runningTotal, 5)
  })

});