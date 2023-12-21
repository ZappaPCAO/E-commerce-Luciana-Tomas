import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit{
  categories: Category[] = [];
  idCategory!: number; //Para filtrar

  title!: string;
  price!: number;
  priceMin!: number;
  priceMax!: number;
  
  productos!: Product[];
  
  constructor(public service: ProductServiceService,
                public serviceCategories: CategoryServiceService, 
                  private router: Router){}

  ngOnInit(): void {
    this.serviceCategories.getCategorys().subscribe((categories: Category[])=>{
      this.categories = categories;
    });
  }

  // filterByTitle(){
  //   this.service.getByTitle(this.title).subscribe((product: Product[]) => {
  //     this.service.productList = product;
  //     this.router.navigate(['product-list',this.title])

  //   });
  // }

  // filterByPrice(){
  //   this.service.getByPrice(this.price).subscribe((product: Product[]) => {
  //     this.service.productList = product;
  //     this.router.navigate(['product-list',this.price])

  //   });
  // }

  // filterByPriceRange(){
  //   this.service.getByPriceRange(this.priceMin, this.priceMax).subscribe((product: Product[]) => {
  //     this.service.productList = product;
  //     this.router.navigate(['product-list',this.priceMin,this.priceMax]);
  //   });
  // }

  verifFilter(){
    let filtroConcat: string = '';
    let rutasParametros: string = '';

    if(this.title){
      if(!filtroConcat){
        filtroConcat = `title=${this.title}`;
        rutasParametros += `${this.title}`;
      }
    }
    if(this.price){
      // Si es el primer filtro que aplica..
      if(!filtroConcat){
        filtroConcat += `price=${this.price}`;
        rutasParametros += `${this.price}`;
      }else{
        filtroConcat += `&price=${this.price}`;
        rutasParametros += `/${this.price}`;
      }
    }
    if (this.idCategory ){
      if(!filtroConcat){
        filtroConcat += `categoryId=${this.idCategory}`;
        rutasParametros += `${this.idCategory}`;
      }else{
        filtroConcat += `&categoryId=${this.idCategory}`;
        rutasParametros += `/${this.idCategory}`;
      }
    }
    if ( this.priceMin || this.priceMax ) {
      // Si es el primer filtro que aplica..
      if(!filtroConcat){
        filtroConcat += `price_min=${this.priceMin}&price_max=${this.priceMax}`;
        rutasParametros += `${this.priceMin}/${this.priceMax}`;
      }else{
        filtroConcat += `&price_min=${this.priceMin}&price_max=${this.priceMax}`;
        rutasParametros += `/${this.priceMin}/${this.priceMax}`;
      }      
    }

    this.service.getByJoinFilter(filtroConcat).subscribe((products: Product[]) => {
      this.service.productList = products;
    })
    this.router.navigate([`product-list/${rutasParametros}`]);
  }

  // filteredTasks() {
  //   if (this.value_checkbox_completed  this.value_checkbox_incomplete  this.value_checkbox_deleted) {
  //     this.filteredTaskList = this.tasks.filter(task =>
  //       (this.value_checkbox_completed && task.status) 
  //       (this.value_checkbox_incomplete && !task.status) 
  //       (this.value_checkbox_deleted && task.deleted)
  //     )
  //   } else {
  //     this.filteredTaskList = this.tasks.filter(task => !task.deleted);
  //   }
  // }
}
