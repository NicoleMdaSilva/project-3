import PromptSync from "prompt-sync";

const prompt = PromptSync()

import { Recipe } from "./Recipe";
import { User } from "./User";

export class UserMember extends User {

    public recipes: Recipe[] = []

    constructor(userName: string, password: string) {
        super(userName, password);
    }

    handleCreateRecipe(recipeName: string, creator: string, type: string, ingredients: string, preparationMode: string) {

        const recipe = new Recipe(recipeName, creator, type, ingredients, preparationMode)

        this.recipes.push(recipe)

    }
}
