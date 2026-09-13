import {Component, inject, signal} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton, MatIconButton} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {form, FormField, required} from '@angular/forms/signals';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {BookScanner} from '../book-scanner/book-scanner';
import {MatIcon} from '@angular/material/icon';

interface BookFormData {
  name: string;
  author: string;
  seria: string;
  publisher: string;
  bought: boolean;
  hadRead: boolean;
}

@Component({
  selector: 'app-book-form',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatSlideToggle,
    FormField,
    FormsModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    BookScanner,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})

export class BookForm {
  public data = inject<any>(MAT_DIALOG_DATA);
  public dialogRef = inject(MatDialogRef);

  readonly scannerOpened = signal(false);
  readonly isMobile = signal(
    window.matchMedia('(pointer: coarse)').matches &&
    window.innerWidth <= 1024
  );
  readonly bookFormModel = signal<BookFormData>({
    name: '',
    author: '',
    seria: '',
    publisher: '',
    bought: false,
    hadRead: false,
  });

  readonly bookForm = form(this.bookFormModel, (schemaPath) => {
    required(schemaPath.name, {message: 'Name is required'});
    required(schemaPath.author, {message: 'Author is required'});
    required(schemaPath.seria, {message: 'Seria is required'});
    required(schemaPath.publisher, {message: 'Publisher is required'});
  });

  save(): void {
    if (this.bookForm().valid()) {
      this.dialogRef.close(this.bookFormModel());
    }

  }
}
