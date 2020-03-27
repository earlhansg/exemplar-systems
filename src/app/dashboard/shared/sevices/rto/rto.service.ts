import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { RTO } from '@app/dashboard/shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RTOService extends RestService {
 url = '/rtos';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getRtos(): Observable<RTO[]> {
    return this.request(this.url, HttpMethodEnum.GET);
 }

}
