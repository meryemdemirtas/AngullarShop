import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from './product';
import { ProductService } from './product.service';

declare let alertify: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private productservice:ProductService ) { }
  title = "Ürün Listesi";
  filterText = ""
  products!: Product[];


  ngOnInit(): void { 
    this.productservice.getProduct().subscribe(data=>{this.products=data})
  }

  addToCart(product: any) {
    alertify.success("sepete eklendi: " + product.name)
  }

}
