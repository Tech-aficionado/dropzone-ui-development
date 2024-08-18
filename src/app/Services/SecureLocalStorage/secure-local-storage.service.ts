import { Injectable } from '@angular/core';
import { EncryptStorage } from 'encrypt-storage';

const prefix = 'Jhola@OwnedByShivanshGoel_'


const encryptStorage = new EncryptStorage(`qwposdjkfcvcmklfsjhola))jdlfFPQFOPEQWOWNEDBY@@SHIVANSHGOEL@@___JHOLAISTHE_ECOMMERCE)SITE`, {
  storageType: 'localStorage', // or 'sessionStorage'
  encAlgorithm: 'AES', // default is AES
  prefix:prefix
});

@Injectable({
  providedIn: 'root'
})
export class SecureLocalStorageService {


  setItem(key:string,value:string){
    encryptStorage.setItem(key,value)
  }
  getItem(key: string){
    const r= encryptStorage.getItem(`${key}`)
    return r
  }
  clear(){
    encryptStorage.clear()
  }
}
