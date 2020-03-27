import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Employee } from '@app/dashboard/shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends RestService {
 url = '/employee';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getEmployee(): Observable<Employee> {
    return this.request(this.url, HttpMethodEnum.GET);
 }

 updateEmployee(body: Employee): Observable<Employee> {
    return this.request(`${this.url}/${body.id}`, HttpMethodEnum.PUT, body);
 }

}
