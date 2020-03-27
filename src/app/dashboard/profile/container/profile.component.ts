import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription, forkJoin } from 'rxjs';
import { Employee, Employer, RTO } from '@app/dashboard/shared/models';
import { EmployeeService, RTOService, EmployerService } from '@app/dashboard/shared/sevices';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  employee: Employee;
  employers: Employer[];
  rtos: RTO[];

  private subscription: Subscription = new Subscription();

  constructor(
    private employeeService: EmployeeService,
    private employerService: EmployerService,
    private rtoService: RTOService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.getData()
        .subscribe(res => {
          this.employee = res[0];
          this.employers = res[1];
          this.rtos = res[2];
        })
    );
  }

  getData(): Observable<any> {
    const response1 = this.employeeService.getEmployee();
    const response2 = this.employerService.getEmployers();
    const response3 = this.rtoService.getRtos();
    return forkJoin([response1, response2, response3]);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
