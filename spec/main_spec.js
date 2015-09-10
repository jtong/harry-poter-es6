"use strict";
import _ from "lodash";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
var expect =  chai.expect;

chai.use(sinonChai);
import Basket from "../src/basket";

describe("Harry Potter", ()=>{
    it("should be no price for no book", ()=>{
        var price = new Basket().discount();
        expect(price).to.equal(0)

    });

});
