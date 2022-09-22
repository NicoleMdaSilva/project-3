"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShowHomeMenu = exports.EnumHome = void 0;
function EnumHome() {
    let home;
    (function (home) {
        home[home["Login"] = 0] = "Login";
        home[home["Cadastro"] = 1] = "Cadastro";
        home[home["Sair"] = 2] = "Sair";
    })(home || (home = {}));
}
exports.EnumHome = EnumHome;
function handleShowHomeMenu() {
}
exports.handleShowHomeMenu = handleShowHomeMenu;
