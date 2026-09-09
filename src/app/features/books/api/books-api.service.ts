import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';
import {map} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BooksApiService  {
  private readonly http = inject(HttpClient);

  getBooks() {
    return this.http.get<Book[]>('./books.json').pipe(
      map(books => books.map((book, index) => ({
          ...book,
          id: index + 1,
        }))
      )
    );
  }
}
