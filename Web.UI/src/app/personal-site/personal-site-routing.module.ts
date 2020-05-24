import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { WelcomeComponent } from './container/welcome/welcome.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { RecipesComponent } from './container/recipes/recipes.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: '', component: WelcomeComponent
            },
            {
                path: 'resume',
                component: UnderConstructionComponent,
                data: {
                    title: 'Résumé'
                }
            },
            {
                path: 'open-source',
                component: UnderConstructionComponent,
                data: {
                    title: 'Open Source'
                }
            },
            {
                path: 'services',
                component: UnderConstructionComponent,
                data: {
                    title: 'Services'
                }
            },
            {
                path: 'recipes',
                component: RecipesComponent,
                data: {
                    title: 'Recipes'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonalSiteRoutingModule {
}
