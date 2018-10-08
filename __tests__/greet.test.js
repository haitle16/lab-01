'use strict';

const greet = require('../lib/greet.js');

describe('greeting test', () =>{
  it('Hello October test!', () => {
    let test1 = greet('October');
    expect(test1).toBe('Hello October');
  });
  it('Null Test!', () => {
    let test2 = greet();
    expect(test2).toBeNull();
  });
});