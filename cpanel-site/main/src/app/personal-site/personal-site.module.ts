import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalSiteRoutingModule } from './personal-site-routing.module';
import { ContainerComponent } from './container/container.component';
import { WelcomeComponent } from './container/welcome/welcome.component';
import { NavComponent } from './container/nav/nav.component';

@NgModule({
  declarations: [ContainerComponent, WelcomeComponent, NavComponent],
  imports: [
    CommonModule,
    PersonalSiteRoutingModule
  ]
})
export class PersonalSiteModule { }
