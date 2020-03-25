import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  organization = {
    organizationId: 1,
    name: 'The Tardis',
    image: 'https://lms-special-content.s3-ap-southeast-2.amazonaws.com/header-logo.png'
  };
  userProfile = {
    id: 1,
    firstname: 'Ben',
    lastname: 'Smith',
    email: 'test@exemplar.com',
    usi: 232323232,
    avatarUrl: 'https://lms-special-content.s3-ap-southeast-2.amazonaws.com/pro.png',
    role: 'student',
    employer: {
      id: 1,
      organizationName: 'BHP'
    },
    rto: {
      id: 1,
      organizationName: 'TAFENSW'
    }
  };
}
