import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Describeable } from './games-entities/describeable';

@Injectable({
    providedIn: 'root'
})
export class RepositoryService {

    constructor(private db: AngularFirestore) {
    }

    public addDescribeable(value: Describeable): void {
        const describeables = this.db.collection<Describeable>('Describeables');

        describeables.add(value);
    }

    public async removeAllDescribeables(): Promise<void> {
        const describeables = this.db.collection<Describeable>('Describeables');

        const list = await describeables.get().toPromise();

        list.forEach(item => item.ref.delete());
    }
}
