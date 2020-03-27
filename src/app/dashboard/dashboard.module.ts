import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './container/dashboard.component';
import { ContentComponent } from './shared/components/content/content.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    ContentComponent,
    SidenavComponent,
    FooterComponent
  ]
})
export class DashboardModule { }
