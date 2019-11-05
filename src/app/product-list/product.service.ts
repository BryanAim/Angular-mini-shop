import { Injectable } from '@angular/core';
import { Iproduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  getProducts(): Observable<Iproduct[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<Iproduct[]>(this.productUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error Occured : ${err.error.message}`;
    } else {
      errorMessage = `Server Returned code: ${err.status}, error Message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

  }
  constructor(private http: HttpClient) { }
}
