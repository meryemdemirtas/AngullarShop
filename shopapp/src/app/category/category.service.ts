import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,tap, Observable ,throwError} from 'rxjs';
import { Category } from './category';

@Injectable()
export class CategoryService {

  constructor(private httpservice: HttpClient) { }
  
  path = "http://localhost:3000/categories"
  getCategories():Observable<Category[]> {

    return this.httpservice.get<Category[]>(this.path).pipe(
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