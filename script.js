// Cadastro e Login de Usuario
var indexName = 0, indexPassword = 0;
var close = true;
var arrayName = [];
var arrayPassword = [];

NameAndPassword()

function NameAndPassword() {
    var name = prompt("Nome:");
    var password = prompt("Senha:");
    arrayName[indexName] = name;
    arrayPassword[indexPassword] = password;
    indexName++;
    indexPassword++;
};

function ChooseOptions() {
    var choice = parseInt(prompt("1 - Cadastro, 2 - Fazer Login, 3 - Excluir Cadastro, 4 -Encerrar Programa"));
    if (choice == 1) {
        NameAndPassword();
    } else if (choice == 2) {
        Login();
    } else if (choice == 3) {
        DeleteRegistration();
    } else if (choice == 4) {
        close = false;
    }
}