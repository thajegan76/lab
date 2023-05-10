import { Product } from "./product";

export class CartItem {
    public id:number;
    public product:Product;
    public requiredQuantity:number;

    constructor(id:number, product:Product, requiredQuantity:number) {
        this.id = id;
        this.product = product;
        this.requiredQuantity =requiredQuantity;
    }
}
