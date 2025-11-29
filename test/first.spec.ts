import assert from "assert"
import {expect} from "chai"

describe("Test name", () => {
    it("first step", () => {
        console.log("abc")
    })

    it("second step", () => {
        throw Error("failed")
    })
})

const a = 7;
const b = 6;

// describe("Second name", () => [
//     it("second step", () => {
//         assert.equal(a, b, "A is not equal b")
//     })
// ])


// describe("Compare variable", () => {
//     it("a is higher then b", () => {
//         // expect(a).to.equal(b)
//         // expect(a).to.be.lessThan(b)
//         expect(a, "Message error").to.be.lessThanOrEqual(b)
//     })
// })