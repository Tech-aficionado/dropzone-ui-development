import { Component, Input } from '@angular/core';

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
  public isDisables: boolean = true;

  public onHoverButton = () => {
    this.isDisables = false;
  };
}
