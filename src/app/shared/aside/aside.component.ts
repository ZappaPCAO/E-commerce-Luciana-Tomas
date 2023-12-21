import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit{

  title: string = '';
  price: number = 0;
  priceMin: number = 0;
  priceMax: number = 0;

  productos!: Product[];

  constructor(public service: ProductServiceService, private router: Router){}

  ngOnInit(): void {
    
  }

  filterByTitle(){
    this.service.getByTitle(this.title).subscribe((product: Product[]) => {
      this.service.productList = product;
      this.router.navigate([''])

    });
  }
}
