import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Describeable } from './games-entities/describeable';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GamesRepositoryService {

    constructor(private db: AngularFirestore) {
    }

    public async getUnusedDescribeables(): Promise<Describeable[]> {
        const describeables = this.db.collection<Describeable>('Describeables',
                ref => ref.where('used', '==', false));

        return await describeables.valueChanges({idField: 'id'})
            .pipe(take(1))
            .toPromise();
    }

    public addDescribeable(value: Describeable): void {
        const describeables = this.db.collection<Describeable>('Describeables');

        describeables.add(value);
    }

    public async markDescribeableAsUsed(id: string): Promise<void> {
        await this.db.doc(`/Describeables/${id}`).update({
            used: true
        });
    }

    public async removeAllDescribeables(): Promise<void> {
        const describeables = this.db.collection<Describeable>('Describeables');

        const list = await describeables.get().toPromise();

        list.forEach(item => item.ref.delete());
    }
}
