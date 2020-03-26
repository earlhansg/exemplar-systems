import { Component, OnInit } from '@angular/core';

import { navigationMenus, tutorials } from '@app/dashboard/data';

import { NavigationMenu, Tutorial } from '../shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navigationMenus: NavigationMenu[] = navigationMenus;
  tutorials: Tutorial[] = tutorials;


  constructor() {}

  ngOnInit() {}

}
