import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Category } from './category';
import { CategoryService } from './category.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private categoryservice:CategoryService ) {
    
   }

  
   title="Kategori Listesi"
   categories!:Category[];

  ngOnInit() {
    this.categoryservice.getCategories().subscribe(data=>{this.categories=data})
  }

}
