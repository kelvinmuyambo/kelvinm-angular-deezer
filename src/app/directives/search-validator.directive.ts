import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appSearchValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: SearchValidatorDirective, multi: true}
  ]
})
export class SearchValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value || !(control.value as string).trim().length) {
      return { message: 'search query cannot be empty' };
    }

    if (control.value.length < 3) {
      return { message: 'search query is too short, provide atleast 3 characters' };
    }

    return null;
  }

}
