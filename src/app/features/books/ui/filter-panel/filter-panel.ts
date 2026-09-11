import {Component, computed, effect, input, output, signal} from '@angular/core';
import {MatCheckbox, MatCheckboxChange} from '@angular/material/checkbox';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {Book} from '../../models/book';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/list';

export interface Filter {
  name: string;
  selected: boolean;
  subfilters: {
    name: string;
    selected: boolean;
  }[];
}

@Component({
  selector: 'app-filter-panel',
  imports: [
    MatCheckbox,
    MatSlideToggle,
    MatButtonToggleGroup,
    MatButtonToggle,
    ReactiveFormsModule,
    MatButton,
    MatDivider,
  ],
  templateUrl: './filter-panel.html',
  styleUrl: './filter-panel.scss',
})


export class FilterPanel {
  readonly books = input<Book[]>([]);
  readonly series = input<string[]>([]);
  readonly isBought = input<string>('all');
  readonly sortDirection = input<string>('asc');
  readonly filter = signal<Filter>({
    name: 'Усі серії',
    selected: true,
    subfilters: [],
  });
  readonly partiallyComplete = computed(() => {
    const filter = this.filter();
    if (!filter.subfilters) {
      return false;
    }
    return filter.subfilters.some(t => t.selected)
      && !filter.subfilters.every(t => t.selected);
  });

  readonly onSortChange = output();
  readonly onBoughtChange = output<string>();
  readonly onSeriaChange = output<Filter>();

  constructor() {
    effect(() => {
      this.filter.update(filter => ({
        ...filter,
        subfilters: this.series().map(name => ({
          name,
          selected: true,
        })),
      }));
    });
  }

  update(event: MatCheckboxChange, index?: number) {
    this.filter.update(task => {
      if (index === undefined) {
        task.selected = event.checked;
        task.subfilters?.forEach(t => (t.selected = event.checked));
      } else {
        task.subfilters![index].selected = event.checked;
        task.selected = task.subfilters?.every(t => t.selected) ?? true;
      }
      return {...task};
    });
    this.onSeriaChange.emit(this.filter());
  }

  sortToggle() {
    this.onSortChange.emit();
  }

  protected onIsBought(event: MatButtonToggleChange) {
    this.onBoughtChange.emit(event.value);
  }
}
