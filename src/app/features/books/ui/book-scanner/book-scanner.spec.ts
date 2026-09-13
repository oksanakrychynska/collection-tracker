import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookScanner } from './book-scanner';

describe('BookScanner', () => {
  let component: BookScanner;
  let fixture: ComponentFixture<BookScanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookScanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookScanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
