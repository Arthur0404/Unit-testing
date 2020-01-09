const assert = require('assert');
const {expect} = require('chai');
const {sum, sum1, isAdult, sortArrayUp,isPalindrome, isOddNumber, isEvenNumber} = require('../index');

describe('function sum', () => {
    it('should function  sum equals 26', () => {
        //assert.equal(sum(15, 11), 26);
        expect(sum(15,11)).eq(26);
    });

    it('should function a not equals 0', () => {
        assert.notEqual(sum(15, 11), 25);
    });
});

it('should function sum1 equals 100',  () => {
    assert.equal(sum1(50, 2), 100);
});
describe('function isAdult', () => {
    it ('should the function show the correct age is equal to or greater than 21', () =>{
        //assert.equal(isAdult(15), false);
        expect(isAdult(15)).false;
    });
    it ('should the function show the correct age is equal to or greater than 21', () => {
        //assert.equal(isAdult(21), true);
        expect(isAdult(21)).true;
    });
});
describe('function sortArrayUp', () => {
  it('should function sort array correct', () => {
      assert.deepEqual(sortArrayUp([4,3,2,0,1]), [0,1,2,3,4])
  })
  it('should function sort array correct', () => {
      assert.deepEqual(sortArrayUp([32,15,2,4,5]),[2,4,5,15,32])
  })
    it('should function sort array correct', () => {
        assert.deepEqual(sortArrayUp([15,32,11,99,5,1,23,0,5,6]), [0,1,5,5,6,11,15,23,32,99])
    })
});
describe('function isPalindrome', () => {
     it('should function works correct',() =>{
         assert.equal(isPalindrome('Elista'), false)
     })
    it('should function works correct', () => {
        assert.equal(isPalindrome('oko'), true)
    })
    it('should function works correct', () => {
        assert.equal(isPalindrome('noon'), true)
    })
});
describe('function isOddNumber', () =>{
    it('function should show odd numbers', () =>{
        assert.equal(isOddNumber(15), true)
    })
    it('function should show odd numbers', () =>{
        assert.equal(isOddNumber(22), false)
    })
    it('function should show odd numbers', () =>{
        assert.equal(isOddNumber('Elista'), undefined)
    })
});
describe('function isEvenNumber', () => {
   it('function should show even numbers', () => {
       assert.equal(isEvenNumber(20), true)
   })
    it('function should show even numbers', () =>{
        assert.equal(isEvenNumber(19), false)
    })
    it('function should show even numbers', () =>{
        assert.equal(isEvenNumber('tryue'), undefined)
    })
});


