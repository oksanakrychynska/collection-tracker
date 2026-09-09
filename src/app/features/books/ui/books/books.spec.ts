import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { Books } from './books';
import { BooksApiService } from '../../api/books-api.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AppStore } from '../../../../core/auth/app.store';

describe('Books', () => {
  let component: Books;
  let fixture: ComponentFixture<Books>;

  const books = [
    {
      id: 1,
      name: 'Angular in Action',
      author: 'John',
      publisher: 'Packt',
      country: 'USA'
    },
    {
      id: 2,
      name: 'Node.js Guide',
      author: 'Mike',
      publisher: 'OReilly',
      country: 'UK'
    },
    {
      id: 3,
      name: 'RxJS Deep Dive',
      author: 'John',
      publisher: 'Packt',
      country: 'USA'
    }
  ];

  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['logout']);

    router = jasmine.createSpyObj('Router', [
      'navigateByUrl'
    ]);

    await TestBed.configureTestingModule({
      imports: [Books],
      providers: [
        {
          provide: BooksApiService,
          useValue: {
            getBooks: () => of(books)
          }
        },
        {
          provide: AuthService,
          useValue: authService
        },
        {
          provide: Router,
          useValue: router
        },
        {
          provide: AppStore,
          useValue: {
            theme: () => 'light',
            toggleTheme: () => {}
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Books);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books', () => {
    expect(component.allBooks().length).toBe(3);
  });

  it('should toggle filters', () => {
    expect(component.filtersOpen()).toBeFalse();

    component.toggleFilters();

    expect(component.filtersOpen()).toBeTrue();
  });

  it('should update search term', () => {
    component.onSearch('Angular');

    expect(component.searchTerm()).toBe('Angular');
  });

  it('should update selected author', () => {
    component.onAuthorChange('John');

    expect(component.selectedAuthor()).toBe('John');
  });

  it('should update selected publisher', () => {
    component.onPublisherChange('Packt');

    expect(component.selectedPublisher()).toBe('Packt');
  });

  it('should clear all filters', () => {
    component.onAuthorChange('John');
    component.onPublisherChange('Packt');

    component.clearFilters();

    expect(component.selectedAuthor()).toBe('');
    expect(component.selectedPublisher()).toBe('');
  });

  it('should return unique authors', () => {
    expect(component.authors()).toEqual([
      'John',
      'Mike'
    ]);
  });


  it('should return unique publishers', () => {
    expect(component.publishers()).toEqual([
      'OReilly',
      'Packt'
    ]);
  });

  // it('should logout', () => {
  //   component.logout();
  //
  //   expect(authService.logout).toHaveBeenCalled();
  //   expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/login');
  // });

});
