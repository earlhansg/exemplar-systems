import { Component, OnInit, OnDestroy } from '@angular/core';

import { animations } from './sidenav.animations';

import { BreakPointService } from '@app/shared/services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [ animations.slideLeftOpacityTrigger ]
})
export class SidenavComponent implements OnInit, OnDestroy {

  leftHeader: string;
  private breakpointsSubcription$: Subscription;

  constructor( private breakPointService: BreakPointService ) {}

  ngOnInit() {
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
