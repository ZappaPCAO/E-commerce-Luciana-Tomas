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
        console.log('soy yo -> ' + this.producto);
      })

    });
  }
}
