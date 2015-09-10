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


});
