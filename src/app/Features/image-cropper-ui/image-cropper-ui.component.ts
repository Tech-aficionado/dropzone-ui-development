import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-image-cropper-ui',
  standalone: true,
  templateUrl: './image-cropper-ui.component.html',
  styleUrls: ['./image-cropper-ui.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageCropperUiComponent {
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
