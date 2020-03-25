import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent {

  faBell = faBell;

  @Input()
  organization: any;
  @Input()
  userProfile: any;
  constructor() {}

}
