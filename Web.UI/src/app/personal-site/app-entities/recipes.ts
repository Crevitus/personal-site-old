export enum UnitOfMeasure {
    tbsp,
    tsp,
    g,
    ml,
    cup,
}

export function ConvertEnumToArray(enumme: {}): {id: number; name: string}[] {
    return Object.keys(enumme)
        .filter(key => typeof enumme[key] === 'number')
        .map(key => ({ id: enumme[key], name: key }))
}

export interface Ingredient {
    name: string;
    quantity: string;
    unitOfMeasure: UnitOfMeasure;
}

export interface MethodSection {
    order: number;
    value: string;
}

export interface Recipe {
    name: string;
    serves?: number;
    prepTime?: number;
    cookingTime?: number;
    ingredients: Ingredient[];
    method: MethodSection[];
}
