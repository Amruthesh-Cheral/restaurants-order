import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  // Required field validator
  requiredField(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { required: true };
  }

  // Validator to check if an option is selected from dropdown or ng-select
  requiredSelect(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { requiredSelect: true };
  }

  // Custom checkbox validator (ensures at least one is checked)
  requiredCheckbox(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { requiredCheckbox: true };
  }

  // Radio button validator
  requiredRadio(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { requiredRadio: true };
  }

  // Custom validator to check for minimum length of input fields
  minLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length >= minLength
        ? null
        : { minLength: { requiredLength: minLength, actualLength: control.value.length } };
    };
  }
}
