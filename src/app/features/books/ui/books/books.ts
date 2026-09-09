import {
  ChangeDetectionStrategy, Component, computed, inject, signal, Signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {BooksApiService} from '../../api/books-api.service';
import {Book, Seria} from '../../models/book';
import {Filter, FilterPanel} from '../filter-panel/filter-panel';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatDivider, MatList, MatListItem, MatListItemIcon} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatToolbarRow} from '@angular/material/toolbar';
import {BookForm} from '../book-form/book-form';
import {MatDialog} from '@angular/material/dialog';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs';
import {MatButton, MatFabButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-books',
  imports: [FilterPanel, MatDrawer, MatDrawerContainer, MatDrawerContent, MatList, MatListItem, MatIcon, MatListItemIcon, MatDivider, NgClass, MatTooltip, MatCheckbox, MatToolbarRow, MatButton, MatIconButton, MatFabButton],
  templateUrl: './books.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './books.scss',
})
export class Books {
  protected readonly Seria = Seria;

  private booksService = inject(BooksApiService);
  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly searchTerm = signal<string>('');
  readonly filtersOpen = signal(false);
  readonly isMobile = toSignal(
    this.breakpointObserver.observe('(max-width: 767px)').pipe(map(({matches}) => matches)),
    {initialValue: false},
  );
  readonly selectedAuthor = signal('');
  readonly selectedPublisher = signal('');
  readonly allBooks: Signal<Book[]> = toSignal(
    this.booksService.getBooks(),
    { initialValue: [] }
  );

  readonly sortedBooks = computed(() => {
    let books = this.allBooks();
    const direction = this.sortDirection();
    const seriaFilter = this.seriaFilter();
    const isBoughtFilter = this.isBoughtFilter();
    const searchTerm = this.searchTerm();

    if (!seriaFilter.selected) {
      const selectedSeries = seriaFilter.subfilters
        .filter(s => s.selected)
        .map(s => s.name);

      books = books.filter(book =>
        selectedSeries.includes(book.seria)
      );
    }

    if(isBoughtFilter !== 'all') {
      books = books.filter(book =>
        isBoughtFilter === 'bought' ? book.bought : !book.bought
      )
    }

    if(searchTerm.length > 0) {
      books = books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return [...books].sort((a, b) => {
      const result = a.name.localeCompare(b.name);

      return direction === 'asc' ? result : -result;
    });
  });

  readonly sortDirection = signal<'asc' | 'desc'>('asc');
  readonly isBoughtFilter= signal<string> ('all');
  readonly seriaFilter = signal<Filter>({
    name: 'All series',
    selected: true,
    subfilters: [],
  });

  readonly authors = computed(() => this.getFilterOptions('author'));
  readonly publishers = computed(() => this.getFilterOptions('publisher'));
  readonly series = computed(() => this.getFilterOptions('seria'));

  readonly dialog = inject(MatDialog);

  onSearch(term: string) {
    this.searchTerm.set(term);
  }

  toggleFilters() {
    this.filtersOpen.update(isOpen => !isOpen);
  }

  onAuthorChange(value: string) {
    this.selectedAuthor.set(value);
  }

  onPublisherChange(value: string) {
    this.selectedPublisher.set(value);
  }

  clearFilters() {
    this.selectedAuthor.set('');
    this.selectedPublisher.set('');
  }

  private getFilterOptions(key: 'author' | 'publisher' | 'seria') {
    return [...new Set(
      this.allBooks()
        .map(book => book[key])
        .filter(Boolean)
    )].sort((first, second) => first.localeCompare(second));
  }

  protected sortToggle() {
    this.sortDirection.update(direction =>
      direction === 'asc' ? 'desc' : 'asc'
    );
  }

  protected onSeriaFilterChange(event: Filter) {
    this.seriaFilter.set(event);
  }

  protected onBoughtFilterChange(event: string) {
    this.isBoughtFilter.set(event)
  }

  openBookForm(): void {
    const dialogRef = this.dialog.open(BookForm, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        // this.animal.set(result);
      }
    });
  }
}
