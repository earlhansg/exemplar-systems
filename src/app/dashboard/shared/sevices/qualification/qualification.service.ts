import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Qualification } from '@app/dashboard/shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QualificationService extends RestService {
 url = '/qualifications';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getQualifications(): Observable<Qualification[]> {
    return this.request(this.url, HttpMethodEnum.GET);
 }

}
