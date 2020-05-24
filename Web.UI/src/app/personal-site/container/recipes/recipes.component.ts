import { Component, OnInit } from '@angular/core';
import { RecipeFormService } from './recipe-form.service';
import { FormArray, FormGroup } from '@angular/forms';
import { ConvertEnumToArray, UnitOfMeasure } from '../../app-entities/recipes';
import { RecipesRepositoryService } from '../../recipes-repository.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
    providers: [ RecipeFormService ]
})
export class RecipesComponent implements OnInit {

    public unitsOfMeasure = ConvertEnumToArray(UnitOfMeasure);

    constructor(private formService: RecipeFormService,
                private repo: RecipesRepositoryService) {
    }

    get form(): FormGroup {
        return this.formService.form;
    }

    get ingredientsFormArray(): FormArray {
        return this.form.controls.ingredients as FormArray;
    }

    get methodSectionsFormArray(): FormArray {
        return this.form.controls.methodSections as FormArray;
    }

    public ngOnInit(): void {
    }

    public onSubmit(): void {
        const recipe = this.formService.getValue();

        this.repo.addRecipe(recipe);
    }
}
