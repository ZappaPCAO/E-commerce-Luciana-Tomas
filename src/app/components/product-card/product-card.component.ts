import { Component, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(public service: ProductServiceService,
    private router: Router){}

  updateProduct() {
    this.service.producto = {
      title: this.product.title,
      price: this.product.price,
      description: this.product.description,
      category: this.product.category,
      // categoryId: 1, // Hardcodeado
      images: this.product.images
    };
    this.router.navigate(['product' , this.product.id]);
  }
  cambiarImagen(event: Event) {
    (event.target as HTMLImageElement).src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }
}
