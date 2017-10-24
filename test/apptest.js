const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const dropApp = require('../app.js');

describe("Rain Drop", () => {
    describe("Handles valid input", () => {
        it("Should return Plong for primeFactors of 28", () => {
            assert.equal(dropApp(28), "Plong");
        });
        it("Should return Plang for primeFactors of 10", () => {
            assert.equal(dropApp(10), "Plang");
        });
        it("Should return PlingPlang for primeFactors of 1755", () => {
            assert.equal(dropApp(1755), "PlingPlang");
        });
        it("Should return Pling for primeFactors of 3", () => {
            assert.equal(dropApp(3), "Pling");
        });
        it("Should return 34 for primeFactors of 34", () => {
            assert.equal(dropApp(34), 34);
        });
        it("Should return 17 for primeFactors of 17", () => {
            assert.equal(dropApp(17), 17);
        });
        it("Should return 0 for primeFactors of 0", () => {
            assert.equal(dropApp(0), 0);
        });
    });

    describe("Handles invalid input", () => {
        it("Should return Please enter a number for primeFactors of 'word'", () => {
            assert.equal(dropApp("word"), 'Please enter a number');
        });

    });
});