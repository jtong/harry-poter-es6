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
    }
}
