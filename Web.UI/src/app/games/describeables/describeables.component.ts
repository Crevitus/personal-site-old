import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Describeable } from '../games-entities/describeable';
import { Observable } from 'rxjs';
import { RepositoryService } from '../repository.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-describeables',
    templateUrl: './describeables.component.html',
    styleUrls: ['./describeables.component.scss']
})
export class DescribeablesComponent implements OnInit {

    private itemsCollection: AngularFirestoreCollection<Describeable>;

    public items: Observable<Describeable[]>;

    constructor(private db: AngularFirestore,
                private repository: RepositoryService) {
        this.itemsCollection = db.collection<Describeable>('Describeables');
        this.items = this.itemsCollection.valueChanges();
    }

    public describeablesForm: FormGroup;

    public ngOnInit(): void {
        this.describeablesForm = new FormGroup({
            value: new FormControl(''),
        });
    }

    public onSubmit(): void {
        this.repository.addDescribeable({
            value: this.describeablesForm.controls.value.value
        })
    }

    public async deleteAll(): Promise<void> {
        await this.repository.removeAllDescribeables();
    }

}
