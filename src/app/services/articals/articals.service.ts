import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc, query, where } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { ArticalInterface } from '../../interfaces/artical-interface';

@Injectable({
  providedIn: 'root'
})
export class ArticalsService {

  constructor() { }

  fireStore = inject(Firestore)
  articalsCollection = collection(this.fireStore, "articales");

  // get all articals
  getArtical (): Observable<ArticalInterface[]> {
    return collectionData(this.articalsCollection, {
      idField: "id"
    }) as Observable<ArticalInterface[]>;
  }

  // get artical by id
  getArticalById (id: string): Observable<ArticalInterface> {
    console.log(id)
    const docRef = doc(this.fireStore, `articales/${id}`)
    const promise = getDoc(docRef).then(res => {
      console.log(res.exists())
      if (res.exists()) {
        return {
          id: res.id, ...res.data() as any
        }
      } else {
        return null
      }
    });

    return from(promise)

  }

  

  filterByCategoryOrKeyword (category: string | null = "", keyword: string | null = ""): Observable<ArticalInterface[]> {
    let q: any;  // = query(this.articalsCollection, where('category', '==', category));
    
    // check both category and keywords
    if (category && keyword) {
      q = query(
        this.articalsCollection, 
        where('category', '==', category),
        where('title', '>=', '\uf8ff'),
        where('title', '<=', keyword + '\uf8ff')
      )
    }

    // check if only category
    else if ( category ) {
      q = query(this.articalsCollection, where('category', '==', category));
    }

    // check if keyword only
    else if ( keyword ) {
      
      q = query(
        this.articalsCollection,
        where('title', '>=', keyword),
        where('title', '<=', keyword + '\uf8ff')
      );
    } 
    else {
      q = this.articalsCollection
    }


    return collectionData(q, {
      idField: "id"
    }) as Observable<ArticalInterface[]>;
  }

  

}


