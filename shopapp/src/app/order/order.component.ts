import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { OrderService } from './order.component.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers:[OrderService]
})
export class OrderComponent implements OnInit {
  degisken: any;
  orders: any = [];
  order: any = {};
  newOrder: any ={};

  constructor( private service: OrderService,private httpClient: HttpClient) { }
  savemodel: any = {
    order: [],
  };
  ngOnInit(): void {

    this.service.getOrderList().subscribe(
      (res: any) =>  {
        this.orders = res;
      },
       error => {alert(JSON.stringify(error))});
  }

  save() {

    try {
      this.service.save(this.newOrder).subscribe(() => {

        this.service.getOrderList().subscribe(
          (res: any) =>  {
            this.orders = res;
          },
           error => {alert(JSON.stringify(error))});
    
      }, error => alert(JSON.stringify(error)));

    
    } catch(err){ alert(JSON.stringify(err))};

    
  }

  openModal(content: any, keep: boolean = false) {
    if (!keep) {
      this.savemodel = { order: []};
    }
  }
}
