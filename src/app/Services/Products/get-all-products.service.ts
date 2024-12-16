import { Injectable } from '@angular/core';
import { DatabaseOperationsService } from '../database-services/database-operations.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SecureLocalStorageService } from '../SecureLocalStorage/secure-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  
  constructor(
    private databaseOperation: DatabaseOperationsService,
    private JWTService: JwtHelperService,
    private localStorage: SecureLocalStorageService,
  ) {}

  public getAllProducts(
    callback: (result: any) => void,){
    this.databaseOperation.getAllProducts().subscribe({
      next: (value) => {
        console.log(value)
        callback(value)
      },
      error(err) {
        console.log(err)
        return err
      },
    })
  }
}
