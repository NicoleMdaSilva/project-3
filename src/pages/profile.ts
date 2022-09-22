import { User } from "../classes/User";
import PromptSync from "prompt-sync";
import { UserMember } from "../classes/UserMember";
import { handleRegisterRecipe } from "../controllers/recipeController";
import { Recipe } from "../classes/Recipe";

const prompt = PromptSync();

export function handleProfile(user: User, users: User[]) {

    if(user instanceof UserMember){
    
    console.log('1 - Cadastrar receita');
    console.log('2 - Visualizar receita');
    console.log('0 - Sair');

    const option = prompt('--> ');
    
    switch (option) {
        case '1':
        console.log('Digite o nome da receita')
        const recipeName = prompt('--> ');
        const creator = UserMember.name;
        console.log('Digite o tipo de receita (Doce, Salgada ou Doce/Salgada');
        const type = prompt('-->');
        
        console.clear();

        console.log('Quais são os ingredientes da sua receita?');
        const ingredients = prompt('-->');

        console.clear();

        console.log('Modo de preparo?');
        const preparationMode = prompt('-->');

        user.handleCreateRecipe(recipeName, creator, type, ingredients, preparationMode)
        
            break;

        case '2':
            users.forEach(user =>{
                if(user instanceof UserMember){
                    user.recipes.forEach(recipe=>{
                        console.table(recipe)
                    })
                }
            })
            break;
        default:
            break;
        }

    }
}
