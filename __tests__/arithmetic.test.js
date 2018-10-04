'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic_test', ()=>{
    it('addition test', () => {
        let testingAdd = arithmetic.add(1,3)
        expect(testingAdd).toBe(4);
    })
    it('subtraction test', () => {
        let testingSub = arithmetic.subtract(1,3)
        expect(testingSub).toBe(-2);
    })
    it('multiplication test', () => {
        let testingMul = arithmetic.multiply(3,4)
        expect(testingMul).toBe(12);
    })
    it('multiplication test 2', () => {
        let num = [1,2,3]
        let testingMul = arithmetic.multiply(...num)
        expect(testingMul).toBe(6);
    })
    it('division test', () => {
        let testingDiv = arithmetic.divide(3,4)
        expect(testingDiv).toBe(3/4);
    })
    it('division test 2', () => {
        let number = [3,2,1];
        let testingDiv = arithmetic.divide(...number)
        expect(testingDiv).toBe(1.5);
    })


});


