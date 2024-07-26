import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-top-bar',
  templateUrl: './custom-top-bar.component.html',
  styleUrls: ['./custom-top-bar.component.css'],
})
export class CustomTopBarComponent {
  @Input() Heading!: string;
  @Input() Triggering!: boolean;
}
