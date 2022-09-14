import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './product';
import { catchError,tap, Observable ,throwError} from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private httpservice: HttpClient) { }
  
  path = "http://localhost:3000/products"
  getProduct():Observable<Product[]> {

    return this.httpservice.get<Product[]>(this.path).pipe(
     tap(data=>console.log(JSON.stringify(data))),
     catchError(this.handleEror)
     


    )
   
  }
  handleEror(err:HttpErrorResponse){
    let errMessage=''
    if(err.error instanceof ErrorEvent){
      errMessage="Bir Hata Oluştu"+err.error.message
    }else{

      errMessage='sistem kaynaklı bir hata oluşmuştur'
    }
    return throwError(errMessage) ;
    
  }
}
