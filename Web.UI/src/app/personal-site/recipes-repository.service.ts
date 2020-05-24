import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from './app-entities/recipes';

@Injectable({
    providedIn: 'root'
})
export class RecipesRepositoryService {

    constructor(private db: AngularFirestore) {
    }

    public addRecipe(value: Recipe): void {
        const recipes = this.db.collection<Recipe>('Recipes');

        recipes.add(value);
    }
}
