import { Component, OnInit } from '@angular/core';
import { GamesRepositoryService } from '../../../games-repository.service';
import { RandomPickerService } from '../../../random-picker.service';

@Component({
    selector: 'app-describeables-play',
    templateUrl: './describeables-play.component.html',
    styleUrls: ['./describeables-play.component.scss']
})
export class DescribeablesPlayComponent {

    public describeableValue: string;

    constructor(private repo: GamesRepositoryService, private rndPicker: RandomPickerService) {
    }

    public async getDescribeable(): Promise<void> {
        const unusedDescribeables = await this.repo.getUnusedDescribeables();

        const describeable = this.rndPicker.getRandomItemFrom(unusedDescribeables);

        await this.repo.markDescribeableAsUsed(describeable.id);

        this.describeableValue = describeable.value;
    }
}
