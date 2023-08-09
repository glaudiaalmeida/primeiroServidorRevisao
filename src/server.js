const express = require("express");
//estamos acima chamando a dependencia que instalamos para dentro do nosso código

//abaixo comando informando para o express vir trabalhar aqui - invocando o express
const app = express();

//abrir uma porta para o navegador funcionar - voce pode usar qualquer porta ate 40000

//declarando variaveis globais
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
const quantidadeDeJogadores = jogadores.length;
let jogadorDaVez = 0;
//criar functions e chama-las dentro da requisição
//exemplo: function iniciarContagem() {

//}

//criando rota
app.get("/", (request, response) => {
    //jogador que vai aparecer no navegador
    const nomeDoJogador = jogadores[jogadorDaVez];
    jogadorDaVez = jogadorDaVez + 1; // ou jogadorDaVez++
    if (jogadorDaVez >= quantidadeDeJogadores) {
        jogadorDaVez = 0;
    //quando jogadorDaVez chegar no maximo do array jogador volta pra posição 0 do array jogador
    }
    //Resposta
    return response.send(`É a vez do ${nomeDoJogador}.`)
});

app.listen(3333, () => {
    console.log("Servidor rodando na http://localhost:3333");
});