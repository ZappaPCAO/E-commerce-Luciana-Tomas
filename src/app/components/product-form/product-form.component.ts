import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(public service: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  // productList: Product [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      const id = +param.get('id')!;
      this.service.producto.id = id;
    });
    console.log('soy yo' + this.service.producto.id);
  }

  // Crear
  createProduct(form: NgForm) {
    console.log(form);
    console.log(this.service.producto.id);
    if (!form.valid) {
      console.log("Formulario inválido.");
      return
    } else if ( this.service.producto.id == 0 ) {
      console.log('else if, create ->');
      this.service.createProduct(form.value).subscribe((respuesta) => {
        //Hacer router
      }, (error) => {
        form.reset();
        console.error('Error:', error);
      });
    } else {
      console.log('else, update ->');

    }

  }

}
