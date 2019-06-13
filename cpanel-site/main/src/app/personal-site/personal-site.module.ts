import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalSiteRoutingModule } from './personal-site-routing.module';
import { ContainerComponent } from './container/container.component';
import { WelcomeComponent } from './container/welcome/welcome.component';
import { NavComponent } from './container/nav/nav.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [ContainerComponent, WelcomeComponent, NavComponent, UnderConstructionComponent],
  imports: [
    CommonModule,
    PersonalSiteRoutingModule
  ]
})
export class PersonalSiteModule { }
