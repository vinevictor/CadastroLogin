// Cadastro e Login de Usuario
var indexName = 0, indexPassword = 0;
var login, password;
var repeat = true;
var arrayName = [];
var arrayPassword = [];


while (repeat) {
    ChooseOptions();
}

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
        login = prompt("Login/Nome:")
        password = prompt("Senha::")
        Login(login, password);

    } else if (choice == 3) {
        DeleteRegistration(login);
    } else if (choice == 4) {
        repeat = false;
    }
};

function Login(login, password) {
    var loginValidation
    for (var i = 0; i < arrayName.length; i++) {
        if (login == arrayName[i] && password == arrayPassword[i]) {
            loginValidation = true;
            console.log("Login Efetuado com Sucesso!")
        } else {
            loginValidation = false
            console.log("Nome ou Senha Incorretos!")
        };

    };
    return loginValidation;
}

function DeleteRegistration(login) {
    var arrSupName = [];
    var arrSupPassword = [];
    var contNameAndPassword = 0
    for (var i = 0; i < arrayName.length; i++) {
        if (login == arrayName[i]) {
            arrSupName[contNameAndPassword] = arrayName[i + 1];
            arrSupPassword[contNameAndPassword] = arrayPassword[i + 1];
            contNameAndPassword++;
            i++;
        } else {
            arrSupName[contNameAndPassword] = arrayName[i];
            arrSupPassword[contNameAndPassword] = arrayPassword[i];
            contNameAndPassword++;
        }

    }
    arrayName = arrSupName;
    arrayPassword = arrSupPassword;

    return arrayName, arrayPassword;

}
