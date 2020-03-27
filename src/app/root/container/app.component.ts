import { Component, OnInit } from '@angular/core';

import { Store } from 'src/store';
import { EmployeeService } from '@app/dashboard/shared/sevices';
import { Employee } from '@app/dashboard/shared/models';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  organization = {
    organizationId: 1,
    name: 'The Tardis',
    image: 'https://lms-special-content.s3-ap-southeast-2.amazonaws.com/header-logo.png'
  };
  userProfile$: Observable<Employee>;
  subscription: Subscription = new Subscription();

  constructor(
    private store: Store,
    private employeeService: EmployeeService) {}

  ngOnInit() {
    this.userProfile$ = this.store.select<Employee>('employee');
    this.subscription.add(
      this.employeeService.getEmployee().subscribe()
    );
  }

}
