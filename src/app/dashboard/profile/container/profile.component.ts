import { Component, OnInit, OnDestroy } from '@angular/core';

import { EmployeeService, RTOService, EmployerService,
  QualificationService } from '@app/dashboard/shared/sevices';

import { Employee, Employer, RTO, Qualification } from '@app/dashboard/shared/models';
import { Observable, Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  employee: Employee;
  employers: Employer[];
  rtos: RTO[];
  qualifications: Qualification[];

  private subscription: Subscription = new Subscription();

  constructor(
    private employeeService: EmployeeService,
    private employerService: EmployerService,
    private rtoService: RTOService,
    private qualification: QualificationService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.getData()
        .subscribe(res => {
          this.employee = res[0];
          this.employers = res[1];
          this.rtos = res[2];
          this.qualifications = res[3];
        })
    );
  }

  getData(): Observable<any> {
    const response1 = this.employeeService.getEmployee();
    const response2 = this.employerService.getEmployers();
    const response3 = this.rtoService.getRtos();
    const response4 = this.qualification.getQualifications();
    return forkJoin([response1, response2, response3, response4]);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
