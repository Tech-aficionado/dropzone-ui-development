import { Injectable } from '@angular/core';
import { DatabaseOperationsService } from '../database-services/database-operations.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SecureLocalStorageService } from '../SecureLocalStorage/secure-local-storage.service';
import { queryOptions } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendIP } from 'Konstants';

type ProductType = {
  details: {
    details: {
      BRAND_ID: String;
      CategoryID: Number;
      Description: String;
      ImageRef: String;
      Price: Number;
      ProductID: Number;
      ProductName: String;
      Reviews: String | null;
      Seller: String;
      StarCount: String;
    };
  }[];
  status: number;
};
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  constructor(
    private databaseOperation: DatabaseOperationsService,
    private JWTService: JwtHelperService,
    private http: HttpClient,
    private localStorage: SecureLocalStorageService,
  ) {}

  public getAllProducts() {
    return {
      queryKey: ['products'],
      queryFn: () =>
        lastValueFrom(
          this.http.get<ProductType>(
            `${BackendIP}/jholi-services/products/getProducts`,
            httpOptions,
          ),
        ),
    };
  }

  public getProductCategories() {
    return {
      queryKey: ['products'],
      queryFn: () =>
        lastValueFrom(
          this.http.get<ProductType>(
            `${BackendIP}/jholi-services/products/getProductCategories`,
          ),
        ),
    };
  }
}
