import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { animations } from './sidenav.animations';

import { BreakPointService } from '@app/shared/services';

import { Subscription } from 'rxjs';

import { NavigationMenu, Tutorial } from '@app/dashboard/shared/models';

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [ animations.slideLeftOpacityTrigger ]
})
export class SidenavComponent implements OnInit, OnDestroy {

  faArrowCircleRight = faArrowCircleRight;
  leftHeader: string;
  private breakpointsSubcription$: Subscription;

  @Input()
  navigationMenus: NavigationMenu[];
  @Input()
  tutorials: Tutorial[];

  constructor( private breakPointService: BreakPointService ) {}

  ngOnInit() {
    // breakPointService is a service will determine the size of mobile size type
    // return boolean
    this.breakpointsSubcription$ = this.breakPointService
      .checkBreakPoints()
      .subscribe((match: boolean) => {
        if (match) {
          this.leftHeader = 'hide';
        } else { this.leftHeader = 'show'; }
      });
  }

  ngOnDestroy() {
    this.breakpointsSubcription$.unsubscribe();
  }

}
