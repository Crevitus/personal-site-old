import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DescribeablesComponent } from './describeables/describeables.component';

@NgModule({
    declarations: [DashboardComponent, DescribeablesComponent],
    imports: [
        CommonModule,
        GamesRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class GamesModule {
}
