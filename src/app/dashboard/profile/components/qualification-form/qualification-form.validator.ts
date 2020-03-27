import { AbstractControl } from '@angular/forms';

export class QualificationValidators {
  static checkQualificationExists(control: AbstractControl) {
    const qualifications = control.get('qualifications');
    const selector = control.get('selector');

    if (!(qualifications && selector)) {
        return null;
    }

    const exists = qualifications.value.some((item) => {
      return item.id === parseInt(selector.value.id);
    });

    return exists ? { qualificationExists: true } : null;

  }
}
