import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalSiteRoutingModule } from './personal-site-routing.module';
import { ContainerComponent } from './container/container.component';
import { WelcomeComponent } from './container/welcome/welcome.component';
import { NavComponent } from './container/nav/nav.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { RecipesComponent } from './container/recipes/recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ContainerComponent, WelcomeComponent, NavComponent, UnderConstructionComponent, RecipesComponent],
    imports: [
        CommonModule,
        PersonalSiteRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class PersonalSiteModule { }
