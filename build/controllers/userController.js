"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRegister = exports.handleLogin = void 0;
const User_1 = require("../classes/User");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const UserMember_1 = require("../classes/UserMember");
const prompt = (0, prompt_sync_1.default)();
const users = [];
let userName = '';
let password = '';
//Login
function handleLogin() {
    do {
        console.clear();
        console.log('Digite seu userName: ');
        userName = prompt('--> ');
        console.log('Digite sua senha: ');
        password = prompt('--> ');
    } while (userName.length < 2 && password.length < 2);
    return users.find(user => user.userName == userName && user.password == password);
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
exports.handleLogin = handleLogin;
function handleRegister() {
    console.clear();
    do {
        console.log('Qual é o seu nome? (Precisa ter mais de 2 caracteres)');
        userName = prompt('--> ');
        console.log('Qual é a sua senha? (Precisa ter mais de 2 caracteres)');
        password = prompt('--> ');
        console.log('voce pode ser membro');
        const opcao = Number(prompt('-->'));
        if (opcao == 1) {
            const newUser = new UserMember_1.UserMember(userName, password);
            users.push(newUser);
        }
        else {
            const newUser = new User_1.User(userName, password);
            users.push(newUser);
        }
    } while (userName.length < 2 && password.length < 2);
    console.clear();
    console.log("Usuário Criado com Sucesso!\n");
}
exports.handleRegister = handleRegister;
//Cadastro
