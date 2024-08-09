import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  public setKey(key: string,value:any){
    let json = JSON.stringify(value)
    localStorage.setItem(key,json)
  }

  public getKey(key: string){
    return localStorage.getItem(key)
  }

  public removeKey(key: string){
    localStorage.removeItem(key)
  }

  public clearStore(){
    localStorage.clear()
  }
}
