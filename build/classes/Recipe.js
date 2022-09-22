"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
class Recipe {
    constructor(creator, recipeName, ingredients, preparationMode, type) {
        this.creator = creator;
        this.recipeName = recipeName;
        this.ingredients = ingredients;
        this.preparationMode = preparationMode;
        this.type = type;
    }
}
exports.Recipe = Recipe;
