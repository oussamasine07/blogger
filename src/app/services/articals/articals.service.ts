import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ArticalInterface } from '../../interfaces/artical-interface';

@Injectable({
  providedIn: 'root'
})
export class ArticalsService {

  constructor() { }

  fireStore = inject(Firestore)
  articalsCollection = collection(this.fireStore, "articales");

  getArtical (): Observable<ArticalInterface[]> {
    return collectionData(this.articalsCollection, {
      idField: "id"
    }) as Observable<ArticalInterface[]>;
  }

}
