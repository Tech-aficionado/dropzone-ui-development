import { Injectable } from "@angular/core";
import { LocalStoreService } from "../Operations/local-store/local-store.service";
import { Observable, Observer } from "rxjs";
import { DatabaseOperationsService } from "../database-services/database-operations.service";
import { ExistingUserSchema, NewUserSchema } from "../Schemas/Auth-schema";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserLoggedIn!: Observer<boolean>
  constructor(
    private localstorage : LocalStoreService,
    private databaseOperation: DatabaseOperationsService
  ) {
  }

  public login(UserDetails: ExistingUserSchema): Observable<any> | undefined {
    let res: string | undefined = undefined 
    this.databaseOperation.loginExistingUser(UserDetails).subscribe({
      next(response) {
         res = response
      },
      error(err) {
         res = err
      },
    })
    return res
  }

  public register(UserDetails: NewUserSchema): Observable<any> | undefined {
    let res: string | undefined = undefined 
    setTimeout(()=>{
      this.databaseOperation.registerUser(UserDetails).subscribe({
        next(response) {
           res = response
        },
        error(err) {
           res = err
        },
      })
    },4000)
    return res
  }


}
