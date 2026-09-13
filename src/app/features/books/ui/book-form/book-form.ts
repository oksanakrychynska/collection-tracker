import {Component, inject, signal} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {form, FormField, required} from '@angular/forms/signals';

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
    FormsModule
  ],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})

export class BookForm {
  dialogRef = inject(MatDialogRef);
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
