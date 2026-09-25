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
import {disabled, form, FormField, readonly, required} from '@angular/forms/signals';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {BookScanner} from '../book-scanner/book-scanner';
import {MatIcon} from '@angular/material/icon';

interface BookFormData {
  name: string;
  author: string;
  color: string;
  seria: string;
  publisher: string;
  barcode: string;
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
    name: this.data?.book?.name ?? '',
    author: this.data?.book?.author ?? '',
    seria: this.data?.book?.seria ?? '',
    publisher: this.data?.book?.publisher ?? '',
    bought: this.data?.book?.bought ?? '',
    hadRead: this.data?.book?.hadRead ?? '',
    barcode:  this.data?.book?.barcode ?? '',
    color:  this.data?.book?.color ?? '#ffffff',
  });

  readonly bookForm = form(this.bookFormModel, (schemaPath) => {
    required(schemaPath.name, {message: 'Name is required'});
    required(schemaPath.author, {message: 'Author is required'});
    required(schemaPath.seria, {message: 'Seria is required'});
    required(schemaPath.publisher, {message: 'Publisher is required'});
    readonly(schemaPath.barcode)
  });

  save(): void {
    if (this.bookForm().valid()) {
      this.dialogRef.close(this.bookFormModel());
    }

  }

  protected getBarcode(event: any) {
    console.log('BARCODE', event);
    this.scannerOpened.set(false);
    this.bookFormModel.update(form => ({
      ...form,
      barcode: event
    }));

  }
}
