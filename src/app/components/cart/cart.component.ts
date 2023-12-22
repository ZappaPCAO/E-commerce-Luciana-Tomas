import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
cart!: Product[];
  constructor(){}

ngOnInit(): void {
  
  this.cart = JSON.parse(localStorage.getItem("items") || "[]");
  
}

}
