import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  signal, output,
} from '@angular/core';

import {
  BrowserMultiFormatReader,
  IScannerControls,
} from '@zxing/browser';

@Component({
  selector: 'app-book-scanner',
  standalone: true,
  templateUrl: './book-scanner.html',
  styleUrl: './book-scanner.scss',
  imports: [
  ]
})
export class BookScanner implements AfterViewInit, OnDestroy {

  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  readonly barcode = signal<string | null>(null);
  private stream?: MediaStream;
  private reader = new BrowserMultiFormatReader();
  private controls?: IScannerControls;

  public closed = output<any>();

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
      await this.startScanning();
    } catch (error) {
      console.error('Camera access error:', error);
    }
  }


  private async startScanning(): Promise<void> {
    this.controls = await this.reader.decodeFromVideoDevice(
      undefined,
      this.video.nativeElement,
      (result) => {
        if (result && !this.barcode()) {
          const value = result.getText();
          this.barcode.set(value);
          this.closed.emit(this.barcode());
          this.controls?.stop();
          this.stream?.getTracks().forEach(track => track.stop());
          this.stream = undefined;
        }
      },
    );
  }


  close() {
    this.controls?.stop();
    this.stream?.getTracks().forEach(track => track.stop());
    this.stream = undefined;
    this.closed.emit(this.barcode());
  }


  ngOnDestroy(): void {
    this.close();
  }
}
