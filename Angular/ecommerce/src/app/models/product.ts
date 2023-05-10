export class Product {

    public id:number;
    public name:string;
    public description:string;
    public source:string;
    public quantity:number;
    public price:number;
    public photo:string;

    public constructor(id:number, name:string, description:string, 
        source:string, quantity:number, price:number, photo:string) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.source = source;
            this.quantity = quantity;
            this.price = price;
            this.photo = photo;
    }

}