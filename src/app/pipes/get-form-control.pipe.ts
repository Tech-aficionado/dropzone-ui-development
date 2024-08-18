import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'getFormControl',
})
export class GetFormControlPipe implements PipeTransform {
  transform(value: FormGroup, name: string): FormControl {
    return (value.get(name) as FormControl) || new FormControl();
  }
}
