'use strict';

let arithmetic = module.exports = {};

// let tobeNull = function (a,b){
//   if( typeof a !== "number" || typeof b !== "number" ) { return null; }
// }

arithmetic.add = function (...sum) {
  // if( typeof sum !== "number" ) { return null; }
  return sum.reduce((previous, current) => {
    return previous + current;
  });
};

arithmetic.subtract = function (...sub) {
  // if( typeof sub !== "number" ) { return null; }
  return sub.reduce((previous, current) => {
    return previous - current;
  });
};

arithmetic.multiply = function (...multi) {
  // if( typeof multi !== "number" ) { return null; }
  return multi.reduce((previous, current) => {
    return previous * current;
  });
};
arithmetic.divide = function (...div) {
  // if( typeof div !== "number" || typeof div !== "number" || typeof a === 0 || typeof b ===0 ) { return null; }
  return div.reduce((previous, current) => {
    return previous / current;
  });
};