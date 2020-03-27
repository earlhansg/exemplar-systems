import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Store } from 'src/store';

import { Employee } from '@app/dashboard/shared/models';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends RestService {
 url = '/employee';

 constructor(private store: Store,
             http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getEmployee(): Observable<Employee> {
    return this.request(this.url, HttpMethodEnum.GET)
            .pipe(
               tap(next => this.store.set('employee', next)));
 }

 updateEmployee(id: number, body: Employee): Observable<Employee> {
    return this.request(`${this.url}?id=${id}`, HttpMethodEnum.PATCH, body);
 }

}
