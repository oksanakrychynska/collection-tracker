import {Component, effect, output} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-panel',
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton,
    MatInput
  ],
  templateUrl: './search-panel.html',
  styleUrl: './search-panel.scss',
})
export class SearchPanel {
  public filterInput = new FormControl('', {
    nonNullable: true
  });

  readonly search = output<string>();

  constructor() {
    this.filterInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed()
    ).subscribe(value => {
      this.search.emit(value);
    });
  }
}
