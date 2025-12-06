import { Calculator } from "../src/hw_13_14";
import { expect } from "chai";


//#домашка 17
//протестировать класс Калькулятор, который мы реализовывали ранее
//Сделать максимально полное покрытие для двух методов (сложение и деление). 
//Все тесты продублировать с использованием
// - Mocha + chai
// - Jest

console.log("--".repeat(23) + 'Mocha + Chai. V1' + "--".repeat(23));

describe("Addition()", () => {
    let calculator: Calculator;
    before(() => 
      calculator = new Calculator()
  )

    it("Addition of two positive integers", () => {
      const positiveIntegersSum = calculator.addition(3, 5);
      expect(positiveIntegersSum).to.equal(8, `Incorrect sum. 3 plus 5 does not equal 8. Sum equal ${positiveIntegersSum}`);
    })

    it("Addition of two negative integers", () => {
      const negativeIntegersSum = calculator.addition(-9, -3);
      expect(negativeIntegersSum).to.equal(-12, `Incorrect sum. -9 plus -3 does not equal -12. Sum equal ${negativeIntegersSum}`);
    })

    it("Addition of positive and negative integers", () => {
      const negativePositiveIntegersSum = calculator.addition(-3, 5);
      expect(negativePositiveIntegersSum).to.equal(2, `Incorrect sum. -3 plus 5 does not equal 2. Sum equal ${negativePositiveIntegersSum}`);
    })

    it("Addition positive integer with zero", () => {
      const positiveIntegersWithZero = calculator.addition(16, 0);
      expect(positiveIntegersWithZero).to.equal(16, `Incorrect sum. 16 plus 0 does not equal 16. Sum equal ${positiveIntegersWithZero}`);
    })

     it("Addition of two zero", () => {
      const twoZeroSum = calculator.addition(0, 0);
      expect(twoZeroSum).to.equal(0, `Incorrect sum. 0 plus 0 does not equal 0. Sum equal ${twoZeroSum}`);
    })

    it("Addition several positive args", () => {
      const severalPositiveIntSum = calculator.addition(6, 1, 18, 3);
      expect(severalPositiveIntSum).to.equal(28, `Incorrect sum. Sum equal ${severalPositiveIntSum}`);
    })

    it("Addition several negative args", () => {
      const severalNegativeIntSum = calculator.addition(-2, -10, -8, -43);
      expect(severalNegativeIntSum).to.equal(-63, `Incorrect sum. Sum equal ${severalNegativeIntSum}`);
    })

    it("Addition of float numbers", () => {
      const floatNumbersSum = calculator.addition(0.3, 0.6);
      expect(floatNumbersSum).to.equal(0.9, `Incorrect float sum. 0.3 plus 0.6 does not equal 0.9. Sum equal ${floatNumbersSum}`);
    })

    it("Addition of mixed several args", () => {
      const mixedSeveralArgsSum = calculator.addition(3, -1, 7);
      expect(mixedSeveralArgsSum).to.equal(9, `Incorrect sum. 3 plus -1 plus 7 does not equal 9. Sum equal ${mixedSeveralArgsSum}`);
    })

    it("Empty function call returns 0", () => {
      const emptyResult = calculator.addition();
      expect(emptyResult).to.equal(0, "Empty addition call must return 0");
    })
})


describe("Division()", () => {
  let calculator: Calculator;
    before(() => 
      calculator = new Calculator()
  )
  
  it("Division two positive numbers", () => {
    const twoPositiveNumsDiv = calculator.division(9, 3);
    expect(twoPositiveNumsDiv).to.equal(3, `Incorrect division. 9 / 3 does not equal 3. Result ${twoPositiveNumsDiv}`);
  })

  it("Division positive on negative", () => {
    const positiveOnNegativeDiv = calculator.division(15, -5);
    expect(positiveOnNegativeDiv).to.equal(-3, `Incorrect division. 15 / -5 does not equal -3. Result ${positiveOnNegativeDiv}`);
  })

  it("Division of two negative nums", () => {
    const negativeNumsDiv = calculator.division(-72, -8);
    expect(negativeNumsDiv).to.equal(9, `Incorrect division. -72 / -8 does not equal 9. Result ${negativeNumsDiv}`);
  })

  it("Division of two float nums", () => {
    const floatNumsDiv = calculator.division(0.6, 0.1);
    expect(floatNumsDiv).to.equal(6, `Incorrect division. 0.6 / 0.1 does not equal 6. Result ${floatNumsDiv}`);
  })

  it("Division positive float on negative float", () => {
    const posOnNegFloatDiv = calculator.division(0.8, -0.2);
    expect(posOnNegFloatDiv).to.equal(-4, `Incorrect division. 0.8 / -0.2 does not equal 6. Result ${posOnNegFloatDiv}`);
  })

  it("Division on zero", () => {
    expect(() => calculator.division(10, 0)).to.throw('деление на 0 запрещено!!!');
  })

  it("Division of num by itself", () => {
    const numOfItselfDiv = calculator.division(7, 7);
    expect(numOfItselfDiv).to.equal(1, `Incorrect division. 7 / 7 does not equal 1. Result ${numOfItselfDiv}`);
  })

    it("Division zero on num", () => {
    const zeroOnNumDiv = calculator.division(0, 3);
    expect(zeroOnNumDiv).to.equal(0, `Incorrect division. 0 / 3 does not equal 0. Result ${zeroOnNumDiv}`);
  })
})




