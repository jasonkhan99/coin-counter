import {coinCounter} from './../src/coin-counter.js';


describe('coinCounter', () => {
  
  test('will return a message if input is not a number', () => {
    expect(coinCounter("four ninety-nine")).toEqual("Please enter a valid numerical value.");
  });
  
  test('will return a message if input is negative', () => {
    expect(coinCounter(-1)).toEqual("Please enter a positive dollar amount.");
  });
  
  test('will return a message if input is a fraction of change', () => {
    expect(coinCounter(1.687)).toEqual("Please only use proper coin amounts.");
  });
});