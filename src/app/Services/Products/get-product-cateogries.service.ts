import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DatabaseOperationsService } from '../database-services/database-operations.service';
import { SecureLocalStorageService } from '../SecureLocalStorage/secure-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GetProductCateogriesService {
  constructor(
    private databaseOperation: DatabaseOperationsService,
    private JWTService: JwtHelperService,
    private localStorage: SecureLocalStorageService,
  ) {}

  public getProductCategories(callback: (result: any) => void) {
    this.databaseOperation.getProductCategories().subscribe({
      next: (value) => {
        console.log(value);
        callback(value);
      },
      error(err) {
        console.log(err);
        return err;
      },
    });
  }
}
