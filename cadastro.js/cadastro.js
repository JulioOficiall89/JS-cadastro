const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome, email, idade, telefone;

rl.question('Digite o nome: ', (answer) => {
  nome = answer;
  rl.question('Digite o email: ', (answer) => {
    nome = answer;
     rl.question('Digite o telefone: ', (answer) => {
      telefone = answer;
      rl.question('Digite o idade: ', (answer) => {
        idade = answer;
      salvarDados(nome, email, telefone);
      })
    });
  });
});

function salvarDados(nome, email, telefone, idade) {
    const dados = `${nome};${email};${telefone};${idade}\n`;
    fs.appendFile('Cadastro.txt', dados, (err) => {
      if (err) {
        console.error('Erro ao salvar dados:', err);
      } else {
        console.log('Dados salvos com sucesso!');
      }
    });
  }