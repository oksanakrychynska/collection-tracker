import {Injectable} from '@angular/core';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {db} from '../../../firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc
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
          // console.log('FIRESTORE SNAPSHOT:', snapshot);

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

  async addBook(book: Omit<Book, 'id'>): Promise<void> {
    try {
      await addDoc(this.booksCollection, book);
      console.log('Book added');
    } catch (error) {
      console.error('Error adding book:', error);
      throw error;
    }
  }

  async updateBook(id: string, changes: Partial<Omit<Book, 'id'>>): Promise<void> {
    const bookRef = doc(db, 'books', id);

    try {
      await updateDoc(bookRef, changes);
      console.log('Book updated');
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  }

  async deleteBook(id: string): Promise<void> {
    const bookRef = doc(db, 'books', id);

    try {
      await deleteDoc(bookRef);
      console.log('Book deleted');
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  }
}
