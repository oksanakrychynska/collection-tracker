import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy, output,
  ViewChild,
} from '@angular/core';

import { BrowserMultiFormatReader } from '@zxing/browser';
import { BarcodeFormat, DecodeHintType } from '@zxing/library';

@Component({
  selector: 'app-book-scanner',
  templateUrl: './book-scanner.html',
  styleUrl: './book-scanner.scss',
})
export class BookScanner implements AfterViewInit, OnDestroy {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  private stream?: MediaStream;
  private reader = new BrowserMultiFormatReader();
  readonly closed = output<void>();

  async ngAfterViewInit(): Promise<void> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
        },
        audio: false,
      });

      this.video.nativeElement.srcObject = this.stream;

      await this.video.nativeElement.play();

      this.startScanning();
    } catch (error) {
      console.error('Camera access error:', error);
    }
  }

  private async startScanning() {
    await this.reader.decodeFromVideoDevice(
      undefined,
      this.video.nativeElement,
      (result, error) => {
        if (result) {
          console.log('BARCODE:', result.getText());
        }

        if (error) {
          // Тут нічого не робимо.
          // ZXing постійно намагається знайти barcode.
        }
      },
    );
  }

  close(): void {
    this.stream?.getTracks().forEach(track => track.stop());
    this.stream = undefined;
  }

  ngOnDestroy(): void {
    this.close();
  }
}
