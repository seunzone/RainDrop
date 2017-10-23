const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const dropApp = require('../app.js');

describe('Make it Rain', function() {
    //Describe Statement
    describe("Pling", () => {
        it("Should return Pling", () => {
            expect(dropApp.rainDrops(9)).to.be.equal("Pling");
        });
        it("Should return Pling", () => {
            expect(dropApp.rainDrops(3)).to.be.equal("Pling");
        });
    });
    //Descsibe: Plang
    describe("Plang", () => {
        it("Should return Plang", () => {
            expect(dropApp.rainDrops(5)).to.be.equal("Plang");
        });
        it("Should return Plang", () => {
            expect(dropApp.rainDrops(20)).to.be.equal("Plang");
        });
    });
    //Descsibe: Plong
    describe("Plong", () => {
        it("Should return Plong", () => {
            expect(dropApp.rainDrops(7)).to.be.equal("Plong");
        });
        it('Should return Plong', () => {
            expect(dropApp.rainDrops(49)).to.be.equal('Plong');
        });
    })
    //Descsibe: PlingPlang
    describe("PlingPlang", () => {
        it("Should return PlingPlang", () => {
            expect(dropApp.rainDrops(15)).to.be.equal('PlingPlang');
        });
        it("Should return PlingPlang", () => {
            expect(dropApp.rainDrops(45)).to.be.equal('PlingPlang');
        });
    });
     //Descsibe: PlingPlong
    describe("PlingPlong", () => {
        it("Should return PlingPlong", () => {
            expect(dropApp.rainDrops(21)).to.be.equal('PlingPlong');
        });
        it("Should return PlingPlong", () => {
            expect(dropApp.rainDrops(63)).to.be.equal('PlingPlong');
        });
    });
    //Descsibe: PlangPlong
    describe("PlangPlong", () => {
        it("Should return PlangPlong", () => {
            expect(dropApp.rainDrops(35)).to.be.equal('PlangPlong');
        });
        it("Should return PlangPlong", () => {
            expect(dropApp.rainDrops(245)).to.be.equal('PlangPlong');
        });
    });
    
});