import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryServiceService } from 'src/app/services/category-service.service';

import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public service: ProductServiceService,
    public serviceCategory: CategoryServiceService) {

  }

  ngOnInit(): void {
    this.getProductList();
  }

  //Obtener productos
  getProductList() {
    this.service.getProducts().subscribe((respuesta: Product[]) => {
      this.service.productList = respuesta;
      // this.serviceProduct.productList.forEach((product)=>{
      //   product.category = arrCategoria.find( (d) => product.categoryId = d.id )
      // });
      console.log(this.service.productList);
    });
  }

  productList(){
    
  }
}
