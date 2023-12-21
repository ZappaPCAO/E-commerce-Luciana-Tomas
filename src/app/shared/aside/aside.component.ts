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
  idCategory: number = 0; //Para filtrar

  title!: string;
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

  concatRuta(rutaConcat: string, tipo:string){
    if(rutaConcat)
      rutaConcat += '/';
    
      rutaConcat += `${ (tipo=='title')    ? this.title : 
                        (tipo=='category') ? this.categories.find(idCat => idCat.id == this.idCategory)?.name :
                                           ((this.priceMin) ? this.priceMin : 1) + '/'+
                                           ((this.priceMax) ? this.priceMax : 9999999)
                                            }`;                               
    
    return rutaConcat;
  }

  concatFiltro(filtroConcat: string, tipo:string){
    if(filtroConcat)
      filtroConcat += '&';
    
    filtroConcat += `${ (tipo=='title')    ? "title=" + this.title : 
                        (tipo=='category') ? 'categoryId=' + this.idCategory :
                                             'price_min='  + ((this.priceMin) ? this.priceMin : 1) +
                                             '&price_max=' + ((this.priceMax) ? this.priceMax : 9999999)
                                          }`;                               
    return filtroConcat;
  }

  verifFilter(){
    let filtroConcat: string = '';
    let rutasParametros: string = '';
    // if(this.title){
    //   if(!filtroConcat){
    //     filtroConcat = `title=${this.title}`;
    //     rutasParametros += `${this.title}`;
    //   }
    // }
    // if (this.idCategory ){
    //   if(!filtroConcat){
    //     filtroConcat += `categoryId=${this.idCategory}`;
    //     rutasParametros += `${this.idCategory}`;
    //   }else{
    //     filtroConcat += `&categoryId=${this.idCategory}`;
    //     rutasParametros += `/${this.idCategory}`;
    //   }
    // }
    // if ( this.priceMin && this.priceMax ) {
    //   // Si es el primer filtro que aplica..
    //   if(!filtroConcat){
    //     filtroConcat += `price_min=${this.priceMin}&price_max=${this.priceMax}`;
    //     rutasParametros += `${this.priceMin}/${this.priceMax}`;
    //   }else{
    //     filtroConcat += `&price_min=${this.priceMin}&price_max=${this.priceMax}`;
    //     rutasParametros += `/${this.priceMin}/${this.priceMax}`;
    //   }      
    // }else if(this.priceMin){ // Solo min
    //   if(!filtroConcat){
    //         filtroConcat += `price=${this.priceMin}`;
    //         rutasParametros += `${this.priceMin}`;
    //       }else{
    //         filtroConcat += `&price=${this.priceMin}`;
    //         rutasParametros += `/${this.priceMin}`;
    //       }
    // }else if(this.priceMax){ // Solo max
    //   if(!filtroConcat){
    //     filtroConcat += `price_min=1&price_max=${this.priceMax}`;
    //     rutasParametros += `1/${this.priceMax}`;
    //   }else{
    //     filtroConcat += `&price_min=1&price_max=${this.priceMax}`;
    //     rutasParametros += `/1/${this.priceMax}`;
    //   }      
    // }
    
    let aux = '';
    if(this.title){
      aux = this.concatFiltro(filtroConcat, 'title');
      if(aux){  
        rutasParametros = this.concatRuta(rutasParametros, 'title');
        filtroConcat = aux;
      }
      aux = '';      
    }
    if(this.idCategory){
      aux = this.concatFiltro(filtroConcat, 'category');
      if(aux){  
        rutasParametros = this.concatRuta(rutasParametros, 'category');
        filtroConcat = aux;
      }
      aux = '';   
    }
    if(this.priceMin || this.priceMax) {
      aux = this.concatFiltro(filtroConcat, 'min');
      if(aux){  
        rutasParametros = this.concatRuta(rutasParametros, 'min');
        filtroConcat = aux;
      }
      aux = ''; 
    }

    console.log('soy yo => ', filtroConcat);
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
