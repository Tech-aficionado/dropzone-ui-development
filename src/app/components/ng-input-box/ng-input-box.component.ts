import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  @Input() form!: FormGroup;
  @Input() inputToolTip!: string;
  @Input() color: string = '#919191';
  @Input() toggleMask: boolean = false;
  @Input() passwordtype!: boolean ;
  @Input() HelperText!: string ;
  @Input() label_color: string = '#919191';
  @Input() input_bg: string = '#222222';
  @Input() input_color: string = '#919191';
  @Input() errorMessage: string | undefined;
  @Output() blur = new EventEmitter<void>();
  constructor() {}
  onInputBlur() {
    this.blur.emit();
  }

  shouldShowError(): boolean {
    const control = this.form.get(this.fieldId);
    return (control && control.invalid && (control.dirty || control.touched)) ?? false;
  }
  shouldShowHelperText(): boolean {
    const control = this.form.get(this.fieldId);
    return (control && control.valid && (control.dirty || control.touched)) ?? false;
  }
}
