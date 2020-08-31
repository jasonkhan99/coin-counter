import {coinCounter} from './../src/coin-counter.js';


describe('coinCounter', () => {
  
  test('will return a message if input is not a number', () => {
    expect(coinCounter("four ninety-nine")).toEqual("Please enter a valid numerical value");
  });
});