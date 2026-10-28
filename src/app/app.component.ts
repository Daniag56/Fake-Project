import { Component,inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  products?:Product[];
  //Inyeccion por funcion
  //private productService = inject(ProductService)
  //Inyeccion por constructor, importante el scope de la propiedad en el constructor
  constructor( private productService : ProductService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      console.log(products);
    });
  }
  title = 'fake-project';
}
