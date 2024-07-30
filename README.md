const fs = require('fs');
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome, email, idade, telefone, senha;

// Função para criar um novo usuário
function criarUsuario(nome, email, telefone, idade, senha) {
  const dados = `${nome};${email};${telefone};${idade};${senha}\n`;
  fs.appendFile('usuarios.txt', dados, (err) => {
    if (err) {
      console.error('Erro ao criar usuário:', err);
    } else {
      console.log('Usuário criado com sucesso!');
    }
  });
}

// Função para verificar as credenciais de login
function verificarLogin(email, senha) {
  fs.readFile('usuarios.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler arquivo de usuários:', err);
    } else {
      const usuarios = data.split('\n');
      for (const usuario of usuarios) {
        const [nome, emailUsuario, telefone, idade, senhaUsuario] = usuario.split(';');
        if (email === emailUsuario && senha === senhaUsuario) {
          console.log('Login efetuado com sucesso!');
          return;
        }
      }
      console.log('Email ou senha incorretos!');
    }
  });
}

// Função para salvar dados (agora com senha)
function salvarDados(nome, email, telefone, idade, senha) {
  criarUsuario(nome, email, telefone, idade, senha);
}

rl.question('Digite o nome: ', (answer) => {
  nome = answer;
  rl.question('Digite o email: ', (answer) => {
    email = answer;
    rl.question('Digite o telefone: ', (answer) => {
      telefone = answer;
      rl.question('Digite a idade: ', (answer) => {
        idade = answer;
        rl.question('Digite a senha: ', (answer) => {
          senha = crypto.createHash('sha256').update(answer).digest('hex');
          salvarDados(nome, email, telefone, idade, senha);
        });
      });
    });
  });
});

// Adicionar uma opção de login
rl.question('Deseja fazer login? (s/n) ', (answer) => {
  if (answer.toLowerCase() === 's') {
    rl.question('Digite o email: ', (answer) => {
      email = answer;
      rl.question('Digite a senha: ', (answer) => {
        senha = crypto.createHash('sha256').update(answer).digest('hex');
        verificarLogin(email, senha);
      });
    });
  }
});
