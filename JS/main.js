var nome = prompt("Qual o seu nome? ");
alert("Bem vindo " + nome);

/*var idade = prompt("Informe sua idade: ");

if (idade >= 18) {
    alert("Você é maior de idade!");
} else {
    alert("Você é menor de idade, procurei seu responsavel.");
}*/

function clicou() {
    alert(nome + ", você é muito curioso!!!");
}

function trocar() {
    document.getElementById("mouse").innerHTML = "Falei para não passar o mouse aqui!";

}

function voltar() {
    document.getElementById("mouse").innerHTML = "Não passe o mouse aqui";
}