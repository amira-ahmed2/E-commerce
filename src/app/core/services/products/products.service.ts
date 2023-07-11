import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 
  constructor(private http: HttpClient) { }
    
  getAllproducts():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}products/`)
  }

  getSingleProd(id:number):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}products/${id}`)
  }

  getCategory():Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}products/categories`)
  }

  getProductByCategory(categoryValue:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}products/category/${categoryValue}`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
}
}


