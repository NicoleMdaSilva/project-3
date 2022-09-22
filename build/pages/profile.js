"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleProfile = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const UserMember_1 = require("../classes/UserMember");
const prompt = (0, prompt_sync_1.default)();
function handleProfile(user, users) {
    if (user instanceof UserMember_1.UserMember) {
        console.log('1 - Cadastrar receita');
        console.log('2 - Visualizar receita');
        console.log('0 - Sair');
        const option = prompt('--> ');
        switch (option) {
            case '1':
                console.log('Digite o nome da receita');
                const recipeName = prompt('--> ');
                const creator = UserMember_1.UserMember.name;
                console.log('Digite o tipo de receita (Doce, Salgada ou Doce/Salgada');
                const type = prompt('-->');
                console.clear();
                console.log('Quais são os ingredientes da sua receita?');
                const ingredients = prompt('-->');
                console.clear();
                console.log('Modo de preparo?');
                const preparationMode = prompt('-->');
                user.handleCreateRecipe(recipeName, creator, type, ingredients, preparationMode);
                break;
            case '2':
                users.forEach(user => {
                    if (user instanceof UserMember_1.UserMember) {
                        user.recipes.forEach(recipe => {
                            console.table(recipe);
                        });
                    }
                });
                break;
            default:
                break;
        }
    }
}
exports.handleProfile = handleProfile;
