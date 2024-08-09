import { Component, Input } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'ng-submit-button',
  templateUrl: './ng-submit-button.component.html',
  styleUrls: ['./ng-submit-button.component.css'],
})
export class NgSubmitButtonComponent {
  @Input() label!: string;
  @Input() marginLeft!: string;
  @Input() marginTop!: string;
  @Input() marginBottom!: string;
  @Input() type!: string
  @Input() loading!: boolean
}
