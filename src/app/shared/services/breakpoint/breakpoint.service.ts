import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { pluck } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BreakPointService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  checkBreakPoints(size?: string) {
    const breakpoints = size ? [size] : [ Breakpoints.Small, Breakpoints.HandsetPortrait];

    return this.breakpointObserver
     .observe(breakpoints)
     .pipe(pluck('matches'));
  }

}
