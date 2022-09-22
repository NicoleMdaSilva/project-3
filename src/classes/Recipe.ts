export class Recipe {
    public creator: string;
    public recipeName: string;
    public ingredients: string;
    public preparationMode: string;
    public type: string;



    constructor(creator: string,recipeName: string, ingredients: string, preparationMode: string, type: string) {
        this.creator = creator;
        this.recipeName = recipeName;
        this.ingredients = ingredients;
        this.preparationMode = preparationMode;
        this.type = type;
    }

}