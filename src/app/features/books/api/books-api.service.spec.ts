import {TestBed} from '@angular/core/testing';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {BooksApiService} from './books-api.service';
import {Book} from '../models/book';

describe('BooksApiService', () => {
  let service: BooksApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksApiService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(BooksApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should request books.json', () => {
    const mockBooks: Book[] = [
      {
        "id": 1,
        "name": "Дюна",
        "author": "Френк Герберт",
        "seria": "Дюна",
        "publisher": "КСД",
        "bought": true,
        "hadRead": false
      }
    ];

    service.getBooks().subscribe(result => {
      expect(result).toEqual(mockBooks);
    });

    const request = httpMock.expectOne('/books.json');

    expect(request.request.method).toBe('GET');

    request.flush(mockBooks);
  });

  it('should return empty array', () => {
    service.getBooks().subscribe(result => {
      expect(result).toEqual([]);
    });

    const request = httpMock.expectOne('/books.json');

    request.flush([]);
  });

  it('should propagate http error', () => {
    let status = 0;

    service.getBooks().subscribe({
      next: () => fail('Expected error'),
      error: err => {
        status = err.status;
      }
    });

    const request = httpMock.expectOne('/books.json');

    request.flush('Server error', {
      status: 500,
      statusText: 'Internal Server Error'
    });

    expect(status).toBe(500);
  });
});
