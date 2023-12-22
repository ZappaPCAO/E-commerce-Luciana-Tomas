import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit{

  producto!: Product;
  

  constructor(private route: ActivatedRoute,
    public service: ProductServiceService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      const id = +param.get('id')!;
      
      this.service.getProduct(id).subscribe((producto) => {
        this.producto = producto;
        console.log(this.producto);
      })

    });
  }


  public addProduct() { 
    // Obtener el arreglo del localStorage si existe, o inicializar uno vacío
    const cart = JSON.parse(localStorage.getItem("items") || "[]");
  
    //Validar si el arreglo ya contiene un objeto con el mismo nombre
    const itemExistente: Product = cart.find((objeto: Product) => objeto.id === this.producto.id);
  
    if (itemExistente) {
          // Si el objeto ya existe, actualizar la cantidad
          let cant = itemExistente.cant || 1;
          itemExistente.cant = cant + 1;
      } else {
          // Si el objeto no existe, agregar uno nuevo al arreglo
          const newItem: Product = this.producto;
          newItem.cant = 1;
          cart.push(newItem);
      }
    // Guardar el arreglo actualizado en el localStorage
      localStorage.setItem('items', JSON.stringify(cart));
  }
}
