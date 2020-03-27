import { Component, ChangeDetectionStrategy, Input, Output,
    EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Employee, Employer, RTO } from '@app/dashboard/shared/models';

import { Subscription, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {

  @Input()
  employee: Employee;

  @Input()
  employers: Employer[];

  @Input()
  rtos: RTO[];

  @Output()
  update = new EventEmitter();

  subcription: Subscription = new Subscription();

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    employer: ['', Validators.required],
    rto: ['', Validators.required]
  });


  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.employee && this.employee.firstName) {
      const { firstName, lastName, email, employer, rto } = this.employee;
      this.form.patchValue({ firstName, lastName, email, employer, rto});
    }
  }

  updateEmployee() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

}
