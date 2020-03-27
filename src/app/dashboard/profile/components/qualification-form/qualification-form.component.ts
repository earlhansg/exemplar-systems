import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Qualification } from '@app/dashboard/shared/models';

import { QualificationValidators } from './qualification-form.validator';

import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-qualification-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.scss']
})
export class QualificationFormComponent {

  faPlus = faPlus;

  @Input()
  qualifications: Qualification[];

  form = this.fb.group({
    qualifications: this.fb.array([]),
    selector: this.createQualification({})
  }, { validator: QualificationValidators.checkQualificationExists } );

  // initial data for qualification
  item = [
    {
      configuration: {},
      qualificationCode: 'UEE30820',
      name: 'UEE30820 Cert II in Electro',
      id: 1
    },
    {
      configuration: {},
      qualificationCode: 'NCA456',
      name: 'NCA456 Some Other Cert',
      id: 3
    }
  ];
  constructor(private fb: FormBuilder) {
    for (const list of this.item) {
      // loop the initial data to this method
      this.addQualification(list);
    }
  }

  // access qualifications formArray for adding and deleting
  get qualificationsList() {
    return this.form.get('qualifications') as FormArray;
  }

  // validation if selected data is already been selected
  // return boolean
  get qualificationExist() {
    return (
      this.form.hasError('qualificationExists') &&
      this.form.get('selector.id').dirty
    );
  }

  // validate if selector has a value
  // return boolean
  get notSelected() {
    return (
      !this.form.get('selector.id').value
    );
  }

  // adding data in to FormArray require this method to avoid storing empty objects
  createQualification(item) {
    return this.fb.group({
      id: item.id || '',
      configuration: item.configuration || {},
      qualificationCode: item.qualificationCode || '',
      name: item.name || ''
    });
  }

  // wait return data to createQualification() method then push 
  addQualification(list) {
    const control = this.form.get('qualifications') as FormArray;
    control.push(this.createQualification(list));
  }

  // param index is a number get from looping qualificationsList
  removeQualificationsList(index: number) {
    const control = this.form.get('qualifications') as FormArray;
    control.removeAt(index);
  }

  // method of adding data in qualificationsList using selector
  selectQualification() {
    const selector = this.form.get('selector').value;
    const id = parseInt(selector.id);
    if (id) {
      const selectedItems = this.qualifications.filter((item) => item.id === id );
      this.addQualification(selectedItems[0]);
      this.form.get('selector').reset({
        id: '',
        configuration: {},
        qualificationCode: '',
        name: ''
      });
    }
  }

}
