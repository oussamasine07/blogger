import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDoc, query, updateDoc, where } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { ArticalInterface } from '../../interfaces/artical-interface';
import { Comment } from '../../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class ArticalsService {

  constructor() { }

  fireStore = inject(Firestore)
  articalsCollection = collection(this.fireStore, "articales");
  commentsCollection = collection(this.fireStore, "comments");

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

  postArtical (data: {
    articalBody: string;
    title: string;
    category: string;
    userId: string | undefined
  }) {

    return addDoc(this.articalsCollection, {
      articalBody: data.articalBody,
      title: data.title,
      category: data.category,
      userId: data.userId
    });

  }

  updateArtical (data: {
    id: string;
    articalBody: string;
    title: string;
    category: string;
    userId: string | undefined
  }) {

    const articalRef = doc(this.fireStore, `articales/${data.id}`)

    updateDoc(articalRef, data)

  }

  deleteArtical (articalId: string) {
    const articalRef = doc(this.fireStore, `articales/${articalId}`)

    deleteDoc(articalRef)
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


  getComments (articalId: string): Observable<Comment[]> {
    const q = query(
      this.commentsCollection,
      where('articalId', '==', articalId)
    )

    return collectionData(q, {
      idField: "id"
    }) as Observable<Comment[]>
  }

  postComment (data: {
    comment: string;
    userId: string | undefined;
    username: string | undefined;
    articalId: string | undefined
  }) {

    return addDoc(this.commentsCollection, {
      articalId: data.articalId,
      comment: data.comment,
      userId: data.userId,
      username: data.username
    });

  }

  deleteComment (commentId: string) {
    const articalRef = doc(this.fireStore, `comments/${commentId}`)

    deleteDoc(articalRef)
  }
  

}


