export default class Basket {
    constructor(basketItems){
        this.basketItems = basketItems;
    }
    discount(){
        if(!this.basketItems || this.basketItems.length == 0){
            return 0;
        }
    }
}
