const {expect} = require("chai");
const {sum, sum1, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber, revArray} = require("../index");

describe("function sum", () => {
  it("should function  sum equals 26", () => {
    expect(sum(15, 11)).eq(26);
  });

  it("should function sum not equals 0", () => {
    expect(sum(15, 11)).to.not.equal(0);
  });
});
describe("function sum1", () => {
  it("function sum1 is not equal to 0", () => {
    expect(sum1(5, 15)).to.not.equal(0);
  });
  it("should function sum1 equals 100", () => {
    expect(sum1(50, 2)).eq(100);
  });
});

describe("function isAdult", () => {
  it("should the function show the correct age is equal to or greater than 21", () => {
    expect(isAdult(15)).false;
  });
  it("should the function show the correct age is equal to or greater than 21", () => {
    expect(isAdult(21)).true;
  });
});

describe("function sortArrayUp", () => {
  it("should function sort array correct", () => {
    expect(sortArrayUp([4, 3, 2, 0, 1])).deep.eq([0, 1, 2, 3, 4]);
  });
  it("should function sort array correct", () => {
    expect(sortArrayUp([32, 15, 2, 4, 5])).deep.eq([2, 4, 5, 15, 32]);
  });
  it("should function sort array correct", () => {
    expect(sortArrayUp([15, 32, 11, 99, 5, 1, 23, 0, 5, 6])).deep.eq([0, 1, 5, 5, 6, 11, 15, 23, 32, 99]);
  });
});

describe("function isPalindrome", () => {
  it("should function works correct", () => {
    expect(isPalindrome("Elista")).false;
  });
  it("should function works correct", () => {
    expect(isPalindrome("oko")).true;
  });
  it("should function works correct", () => {
    expect(isPalindrome("noon")).true;
  });
});

describe("function isOddNumber", () => {
  it("function should show odd numbers", () => {
    expect(isOddNumber(15)).true;
  });
  it("function should show odd numbers", () => {
    expect(isOddNumber(22)).false;
  });
  it("function should show odd numbers", () => {
    expect(isOddNumber("Elista")).undefined;
  });
});

describe("function isEvenNumber", () => {
  it("function should show even numbers", () => {
    expect(isEvenNumber(20)).true;
  });
  it("function should show even numbers", () => {
    expect(isEvenNumber(19)).false;
  });
  it("function should show even numbers", () => {
    expect(isEvenNumber("true")).undefined;
  });
});

describe("function revArray", () => {
  it("function revArray expands an array", () => {
    expect(revArray([1, 3, 5, 4, 6, 8])).deep.eq([8, 6, 4, 5, 3, 1]);
  });
});


