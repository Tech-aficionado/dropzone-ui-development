import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-input-box',
  templateUrl: './ng-input-box.component.html',
  styleUrls: ['./ng-input-box.component.css'],
})
export class NgInputBoxComponent {
  @Input() marginBottom!: string;
  @Input() marginTop!: string;
  @Input() width!: string;
  @Input() fieldIconName!: string;
  @Input() fieldId!: string;
  @Input() fieldLabel!: string;
  @Input() marginLeft!: string;
  @Input() inputType!: string;
}
