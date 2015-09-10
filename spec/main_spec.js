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
        var price = new Basket().discount();
        expect(price).to.equal(0)

        var price = new Basket([]).discount();
        expect(price).to.equal(0)

    });

    it("should be origin price for 1 book", ()=>{
        var price = new Basket([new HarryPotter("1st", 1)]).discount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("2nd", 1)]).discount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("3rd", 1)]).discount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("4th", 1)]).discount();
        expect(price).to.equal(8);
        var price = new Basket([new HarryPotter("5th", 1)]).discount();
        expect(price).to.equal(8);

    })

});
