import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServicesService {
  constructor() {
    let admin = require('firebase-admin');

    let serviceAccount = require('/home/shivanshgoel__07_/Downloads/jhola-ui-firebase-adminsdk-vtk0y-6e4fb6457a.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
}
