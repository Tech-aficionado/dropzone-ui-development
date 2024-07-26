import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.css'],
})
export class CameraCaptureComponent implements AfterViewInit {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>;
  @ViewChild('capturedImage')
  capturedImageElement!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    this.startCamera();
  }

  startCamera(): void {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera: ', error);
      });
  }

  captureImage(): void {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d')!;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a data URL and display the captured image
    const dataUrl = canvas.toDataURL('image/png');
    this.capturedImageElement.nativeElement.src = dataUrl;
    this.capturedImageElement.nativeElement.style.display = 'block';
  }
}
