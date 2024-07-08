import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  products$: Observable<IProduct[]>;
  categories$: Observable<string[]>;

  isLoading: boolean = false;

  getProducts(): Observable<IProduct[]> {
    this.isLoading = true;
    this.products$ = this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 500 },
        }),
      })
      .pipe(
        // delay(200),
        retry(3),
        tap({
          next: (data) => {
            this.isLoading = false;
          },
          error: () => {
            this.isLoading = false;
          },
        }),
        catchError(this.errorHandler.bind(this))
      );

    return this.products$;
  }

  getCategories(): Observable<string[]> {
    this.isLoading = true;
    this.categories$ = this.http
      .get<string[]>('https://fakestoreapi.com/products/categories', {
        params: new HttpParams({
          fromObject: { limit: 500 },
        }),
      })
      .pipe(
        // delay(200),
        retry(3),
        tap({
          next: (data) => {
            this.isLoading = false;
          },
          error: () => {
            this.isLoading = false;
          },
        }),
        catchError(this.errorHandler.bind(this))
      );

    return this.categories$;
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
