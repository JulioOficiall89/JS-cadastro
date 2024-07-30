const fs = require('fs');
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome, email, idade, telefone, senha;

function cadastrarUsuario() {
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
            const dados = `${nome};${email};${telefone};${idade};${senha}\n`;
            fs.appendFile('usuarios.txt', dados, (err) => {
              if (err) {
                console.error('Erro ao criar usuário:', err);
              } else {
                console.log('Usuário criado com sucesso!');
              }
            });
          });
        });
      });
    });
  });
}

function verificarLogin() {
  rl.question('Digite o email: ', (answer) => {
    email = answer;
    rl.question('Digite a senha: ', (answer) => {
      senha = crypto.createHash('sha256').update(answer).digest('hex');
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
    });
  });
}

function menu() {
  console.log("Menu de Opções:");
  console.log("1. Login");
  console.log("2. Registro");
  console.log("3. Sair");
  rl.question("Escolha uma opção: ", (answer) => {
    switch (answer) {
      case "1":
        verificarLogin();
        break;
      case "2":
        cadastrarUsuario();
        break;
      case "3":
        process.exit();
      default:
        console.log("Opção inválida. Por favor, escolha novamente.");
        menu();
    }
  });
}

menu();
function cadastrarUsuario() {
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
            const dados = `${nome};${email};${telefone};${idade};${senha}\n`;
            fs.appendFile('usuarios.txt', dados, (err) => {
              if (err) {
                console.error('Erro ao criar usuário:', err);
              } else {
                console.log('Usuário criado com sucesso!');
                menu(); // <--- Chama a função menu() novamente
              }
            });
          });
        });
      });
    });
  });
}

function verificarLogin() {
  rl.question('Digite o email: ', (answer) => {
    email = answer;
    rl.question('Digite a senha: ', (answer) => {
      senha = crypto.createHash('sha256').update(answer).digest('hex');
      fs.readFile('usuarios.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler arquivo de usuários:', err);
        } else {
          const usuarios = data.split('\n');
          for (const usuario of usuarios) {
            const [nome, emailUsuario, telefone, idade, senhaUsuario] = usuario.split(';');
            if (email === emailUsuario && senha === senhaUsuario) {
              console.log('Login efetuado com sucesso!');
              menu(); // <--- Chama a função menu() novamente
              return;
            }
          }
          console.log('Email ou senha incorretos!');
          menu(); // <--- Chama a função menu() novamente
        }
      });
    });
  });
}

function cadastrarUsuario() {
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
              const dados = `${nome};${email};${telefone};${idade};${senha}\n`;
              fs.appendFile('usuarios.txt', dados, (err) => {
                if (err) {
                  console.error('Erro ao criar usuário:', err);
                } else {
                  console.log('Usuário criado com sucesso!');
                  menu(); // <--- Chama a função menu() novamente
                }
              });
            });
          });
        });
      });
    });
  }
  
  function verificarLogin() {
    rl.question('Digite o email: ', (answer) => {
      email = answer;
      rl.question('Digite a senha: ', (answer) => {
        senha = crypto.createHash('sha256').update(answer).digest('hex');
        fs.readFile('usuarios.txt', 'utf8', (err, data) => {
          if (err) {
            console.error('Erro ao ler arquivo de usuários:', err);
          } else {
            const usuarios = data.split('\n');
            for (const usuario of usuarios) {
              const [nome, emailUsuario, telefone, idade, senhaUsuario] = usuario.split(';');
              if (email === emailUsuario && senha === senhaUsuario) {
                console.log('Login efetuado com sucesso!');
                menu(); // <--- Chama a função menu() novamente
                return;
              }
            }
            console.log('Email ou senha incorretos!');
            menu(); // <--- Chama a função menu() novamente
          }
        });
      });
    });
  }