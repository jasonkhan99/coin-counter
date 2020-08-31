import {coinCounter} from './../src/coin-counter.js';


describe('coinCounter', () => {
  
  test('will return a message if input is not a number', () => {
    expect(coinCounter("four ninety-nine")).toEqual("Please enter a valid numerical value");
  });
  
  test('will return a message if input is not valid currency', () => {
    expect(coinCounter(-1)).toEqual("This is not valid US legal tender");
  });
  
});