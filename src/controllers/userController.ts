import { User } from "../classes/User"
import PromptSync from "prompt-sync";
import { UserMember } from "../classes/UserMember";
import { updateTypeAssertion } from "typescript";

const prompt = PromptSync();

const users: User[] = []

let userName = ''
let password = ''

//Login
export function handleLogin() {
    do {
        console.clear();
        console.log('Digite seu userName: ');
        userName = prompt('--> ');
        console.log('Digite sua senha: ');
        password = prompt('--> ');
    } while (userName.length < 2 && password.length < 2);

    return users.find(user => user.userName == userName && user.password == password)

    /* users.forEach(user => {
       if (user.userName == userName && user.password == password) {
           console.clear();
           console.log('Login realizado com sucesso');


       } else {
           console.clear();
           console.log('Usuário não encontrado\n');
       } 

        }); */

}

export function handleRegister() {
    console.clear();

    do {
        console.log('Qual é o seu nome? (Precisa ter mais de 2 caracteres)')
        userName = prompt('--> ');
        console.log('Qual é a sua senha? (Precisa ter mais de 2 caracteres)')
        password = prompt('--> ');

        console.log('voce pode ser membro')

        const opcao = Number(prompt('-->'))

        if(opcao == 1){
            const newUser = new UserMember(userName, password);
            users.push(newUser);
        }else{
            const newUser = new User(userName, password);
            users.push(newUser);
        }

    } while (userName.length < 2 && password.length < 2);



    

    console.clear();
    console.log("Usuário Criado com Sucesso!\n");

}
//Cadastro




