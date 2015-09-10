export default class Basket {
    constructor(basketItems){
        this.basketItems = basketItems;
    }
    getPriceAfterDiscount(){
        if(!this.basketItems || this.basketItems.length == 0){
            return 0;
        }
        if(this.basketItems.length == 1){
            return this.basketItems[0].price;
        }

        var basketItems = this.basketItems;
        var discounts = calculateMaxDiscounts(basketItems);
        var sum = sumPriceWithDiscount(discounts, basketItems);
        return sum;
    }
}

var Discounts = {
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25
};

function sumPriceWithDiscount(discounts, basketItems) {
    let sum = discounts.reduce((result, item, index) => {
        if (index > 0) {
            return result + 8 * item * (index + 1) * (1 - Discounts[index + 1]);
        }
        return result + 8 * item
    }, 0);

    let leftItem = basketItems.find((item) => {
        return item.count > 0;
    });

    if (leftItem) {
        sum += 8 * leftItem.count;
    }
    return sum;
}

function calculateMaxDiscounts(basketItems) {
    var discounts = [0, 0, 0, 0, 0, 0];
    do {
        var discountLevel = basketItems.reduce((result, item)=> {
            if (item.count > 0) {
                item.count--;
                return result + 1;
            }
            return result;
        }, 0);
        discounts[discountLevel]++;
    } while (discountLevel > 1)
    discounts.shift();
    return discounts;
}