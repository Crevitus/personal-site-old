import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe } from '../../app-entities/recipes';

@Injectable()
export class RecipeFormService {

    private _form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    get form(): FormGroup {
        if(!this._form){
            this._form = this.build();
        }

        return this._form;
    }

    private build(): FormGroup {
        return this.fb.group({
            name: [],
            serves: [],
            prepTime: [],
            cookingTime: [],
            ingredients: this.fb.array([
                this.fb.group({
                    name: [],
                    quantity: [],
                    unitOfMeasure: []
                })
            ]),
            methodSections: this.fb.array([
                this.fb.group({
                    value: []
                })
            ]),
        });
    }

    public getValue(): Recipe {
        return {
            name: this.form.controls.name.value,
        } as Recipe;
    }
}
