import { Product } from "./product"

export class Cart {

    products: Product [];

    constructor(){
        this.products = [];

    }

    addProduct(producto: Product){
        producto.cant = 1;
        this.products.push(producto);

    }
    
    calcularTotal(){
        let total: number = 0;
        this.products.forEach((product: Product) =>{
            total = (product.cant! * product.price);
        })
    }
}