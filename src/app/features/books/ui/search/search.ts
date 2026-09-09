import {Component, output, ChangeDetectionStrategy} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  imports: [
    MatFormField,
    MatLabel,
    MatIconButton,
    MatIcon,
    ReactiveFormsModule,
    MatInput
  ],
  templateUrl: './search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './search.scss',
})
export class Search {
  readonly search = output<string>();

  readonly searchControl = new FormControl('', {
    nonNullable: true
  });

  constructor() {
    this.searchControl.valueChanges.pipe(
      takeUntilDestroyed()
    ).subscribe(value => {
      this.search.emit(value);
    });
  }
}
