import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';

import { SharedModule } from '@app/shared/shared.module';

import { ProfileComponent } from './container/profile.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    UserFormComponent
  ]
})
export class ProfileModule { }
