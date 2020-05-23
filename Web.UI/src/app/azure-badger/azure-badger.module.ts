import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AzureBadgerRoutingModule } from './azure-badger-routing.module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule,
    AzureBadgerRoutingModule
  ]
})
export class AzureBadgerModule { }
