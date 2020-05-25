import { Component, OnInit } from '@angular/core';
import { GamesRepositoryService } from '../../../games-repository.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-describeables-admin',
    templateUrl: './describeables-admin.component.html',
    styleUrls: ['./describeables-admin.component.scss']
})
export class DescribeablesAdminComponent implements OnInit {

    constructor(private repository: GamesRepositoryService) {
    }

    public describeablesForm: FormGroup;

    public ngOnInit(): void {
        this.describeablesForm = new FormGroup({
            value: new FormControl(''),
        });
    }

    public onSubmit(): void {
        this.repository.addDescribeable({
            value: this.describeablesForm.controls.value.value,
            used: false,
        });
    }

    public async deleteAll(): Promise<void> {
        await this.repository.removeAllDescribeables();
    }
}
