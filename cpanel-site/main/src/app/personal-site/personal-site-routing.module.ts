import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContainerComponent} from './container/container.component';
import {WelcomeComponent} from './container/welcome/welcome.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';

const routes: Routes = [
  {
    path: 'secrettest',
    component: ContainerComponent,
    children: [
      {
        path: '', component: WelcomeComponent
      }
    ]
  },
  {
    path: '',
    component: UnderConstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalSiteRoutingModule {
}
