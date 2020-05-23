import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Item {
    name: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    private itemsCollection: AngularFirestoreCollection<Item>;

    public items: Observable<Item[]>;

    constructor(private db: AngularFirestore) {
        this.itemsCollection = db.collection<Item>('items');
        this.items = this.itemsCollection.valueChanges();
    }

    ngOnInit() {
    }

}
