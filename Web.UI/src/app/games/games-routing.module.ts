import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesListingComponent } from './dashboard/games-listing/games-listing.component';
import { DescribeablesPlayComponent } from './dashboard/describeables/describeables-play/describeables-play.component';
import { DescribeablesAdminComponent } from './dashboard/describeables/describeables-admin/describeables-admin.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: GamesListingComponent,
            },
            {
                path: 'describeables',
                component: DescribeablesPlayComponent,
                data: {
                    title: 'Describeables',
                    desc: 'Pick a phrase out the \'hat\'',
                    icon: 'some-icon',
                },
            },
            {
                path: 'describeables-admin',
                component: DescribeablesAdminComponent,
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
