// Cadastro e Login de Usuario
var indexName = 0, indexPassword = 0;

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