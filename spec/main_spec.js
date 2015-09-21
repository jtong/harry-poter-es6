"use strict";
import _ from "lodash";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
var expect =  chai.expect;

chai.use(sinonChai);
import Basket from "../src/basket";
import HarryPotter from "../src/harry-potter";

describe("Harry Potter", ()=>{
    it("should be no price for no book", ()=>{
        var price = new Basket().getPriceAfterDiscount();
        expect(price).to.equal(0);

        var price = new Basket([]).getPriceAfterDiscount();
        expect(price).to.equal(0);

    });

    it("should be origin price for 1 book", ()=>{
        var price = new Basket([new HarryPotter("1st", 1)]).getPriceAfterDiscount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("2nd", 1)]).getPriceAfterDiscount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("3rd", 1)]).getPriceAfterDiscount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("4th", 1)]).getPriceAfterDiscount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("5th", 1)]).getPriceAfterDiscount();
        expect(price).to.equal(8);

    });

    it("should be 5% discount price for just 2 different books", () => {
        var books = [new HarryPotter("1st", 1), new HarryPotter("2nd",1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(2*(8*(1-0.05)));
    });

    it("should be 5% discount price for 2 different books and more same books", () => {
        var books = [new HarryPotter("1st", 3), new HarryPotter("2nd",1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(2*(8*(1-0.05))+2*8);
    });
    
    it("should be 10% discount price for just 3 different books", () => {
        var books = [new HarryPotter("1st", 1), new HarryPotter("2nd",1), new HarryPotter("3nd",1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(3*(8*(1-0.1)));
    });

    it("should be 10% discount price 3 different books and more same books", () => {
        var books = [new HarryPotter("1st", 1), new HarryPotter("2nd",3), new HarryPotter("3nd",1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(3*(8*(1-0.1))+ 2*8);
    });

    it("should be 10% discount price for 3 different books and  5% discount price for 2 different books", () => {
        var books = [new HarryPotter("1st", 1), new HarryPotter("2nd",2), new HarryPotter("3nd",2)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(2*(8*(1-0.05))+ 3*(8*(1-0.1)));
    });

    it("should be 10% discount price for 3 different books even more rounds", () => {
        var books = [new HarryPotter("1st", 2), new HarryPotter("2nd",2), new HarryPotter("3rd", 2)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(6*(8*(1-0.1)));
    });

    it("should be 20% discount price for just 4 different books", () => {
        var books = [new HarryPotter("1st", 1), new HarryPotter("2nd",1), 
                     new HarryPotter("3rd", 1), new HarryPotter("4th", 1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(4*(8*(1-0.2)));
    });
    
    it("should be 25% discount price for just 5 different books", () => {
        var books = [new HarryPotter("1st", 1), new HarryPotter("2nd",1), 
                     new HarryPotter("3rd", 1), new HarryPotter("4th", 1),
                     new HarryPotter("5th", 1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(5*(8*(1-0.25)));
    });

    it("should choose 44 strategy instead of 53 strategy", () => {
        var books = [new HarryPotter("1st", 2), new HarryPotter("2nd",2),
            new HarryPotter("3rd", 2), new HarryPotter("4th", 1),
            new HarryPotter("5th", 1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(8*(8*(1-0.20)));
    });

    it("should choose 44 strategy instead of 53 strategy 2", () => {
        var books = [new HarryPotter("1st", 4), new HarryPotter("2nd",4),
            new HarryPotter("3rd", 4), new HarryPotter("4th", 3),
            new HarryPotter("5th", 1)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(16*(8*(1-0.20)));
    });

    it("should choose 44 strategy instead of 53 strategy 3", () => {
        var books = [new HarryPotter("1st", 4), new HarryPotter("2nd",4),
            new HarryPotter("3rd", 4), new HarryPotter("4th", 3),
            new HarryPotter("5th", 2)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(12*(8*(1-0.20))+ 5*8*(1-0.25));
    });

    it("should choose 44 strategy instead of 53 strategy 4", () => {
        var books = [new HarryPotter("1st", 12), new HarryPotter("2nd",12),
            new HarryPotter("3rd", 12), new HarryPotter("4th", 6),
            new HarryPotter("5th", 6)];
        var price = new Basket(books).getPriceAfterDiscount();
        expect(price).to.equal(48*(8*(1-0.20)));
    });
});
