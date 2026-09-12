import {Injectable} from '@angular/core';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {db} from '../../../firestore';
import {
  collection,
  onSnapshot
} from 'firebase/firestore';



@Injectable({
  providedIn: 'root',
})
export class BooksApiService  {

  private booksCollection = collection(db, 'books');

  getBooks(): Observable<Book[]> {
    return new Observable<Book[]>(subscriber => {
      return onSnapshot(
        this.booksCollection,
        snapshot => {
          console.log('FIRESTORE SNAPSHOT:', snapshot);

          const books = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as Book));

          subscriber.next(books);
        },
        error => {
          console.error('FIRESTORE ERROR:', error);
          subscriber.error(error);
        }
      );
    });
  }
}
