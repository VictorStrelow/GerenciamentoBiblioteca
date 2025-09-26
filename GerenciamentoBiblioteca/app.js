import readline from "readline";

import {adicionarLivro, listarLivros, buscarLivroPorTitulo, editarLivro, alterarDisponibilidade, removerLivro, filtroDisponibilidade, buscarLivroPorAutor} from "./biblioteca.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log('\n===== SISTEMA DE BIBLIOTECA =====');
    console.log('| 1 | Adicionar Livro');
    console.log('| 2 | Listar Livros');
    console.log('| 3 | Buscar Livro Por Título');
    console.log('| 4 | Buscar Livro Por Autor');
    console.log('| 5 | Editar Livro');
    console.log('| 6 | Alterar Disponibilidade');
    console.log('| 7 | Remover Livro');
    console.log('| 8 | Listar Livros Disponíveis');
    console.log('| 0 | Sair');
    console.log('=================================');

    rl.question("Escolha uma opção: ", (opcao) => {
        tratarOpcao(opcao);
    })

}

function tratarOpcao(opcao) {
  switch (opcao) {
    case "1":
      rl.question("Título: ", (titulo) => {
        rl.question("Autor: ", (autor) => {
          rl.question("Ano de Publicação: ", (ano) => {
            rl.question("Gênero: ", (genero) => {
              adicionarLivro(titulo, autor, ano, genero);
              exibirMenu();
            });
          });
        });
      });
      break;

    case "2":
      listarLivros();
      exibirMenu();
      break;

    case "3":
      rl.question("Título do Livro: ", (titulo) => {
        buscarLivroPorTitulo(titulo);
        exibirMenu();
      });
      break;

    case "4":
      rl.question("Autor do Livro: ", (autor) => {
        buscarLivroPorAutor(autor);
        exibirMenu();
      });
      break;

    case "5":
      rl.question("ID do livro para editar: ", (id) => {
        rl.question("Novo título (Enter para manter): ", (titulo) => {
          rl.question("Novo autor (Enter para manter): ", (autor) => {
            rl.question("Novo ano (Enter para manter): ", (ano) => {
              rl.question("Novo gênero (Enter para manter): ", (genero) => {
                editarLivro(
                  parseInt(id),
                  titulo || undefined,
                  autor || undefined,
                  ano || undefined,
                  genero || undefined
                );
                exibirMenu();
              });
            });
          });
        });
      });
      break;

    case "6":
      rl.question("ID do livro para alterar disponibilidade: ", (id) => {
        alterarDisponibilidade(parseInt(id));
        exibirMenu();
      });
      break;

    case "7":
      rl.question("ID do livro para remover: ", (id) => {
        removerLivro(parseInt(id));
        exibirMenu();
      });
      break;

    case "8":
      filtroDisponibilidade();
      exibirMenu();
      break;

    case "0":
      console.log("Saindo do Sistema...");
      rl.close();
      break;

    default:
      console.log("Opção Inválida!");
      exibirMenu();
      break;
  }
}

exibirMenu();