import readline from "readline";

import {
    adicionarLivro,
    listarLivros,
    buscarLivroPorTitulo,
    editarLivro,
    alterarDisponibilidade,
    removerLivro,
    listarLivrosDisponiveis,
    buscarLivroPorAutor,
    listarLivrosPorGenero,
    ordenarLivrosPorAno,
    registrarEmprestimo,
    gerarRelatorioEmprestimos
} from "./biblioteca.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log('\n======== SISTEMA DE BIBLIOTECA ========');
    console.log('| 01 | Adicionar Livro                |');
    console.log('| 02 | Listar Livros                  |');
    console.log('| 03 | Buscar Livro Por Título        |');
    console.log('| 04 | Buscar Livro Por Autor         |');
    console.log('| 05 | Editar Livro                   |');
    console.log('| 06 | Alterar Disponibilidade        |');
    console.log('| 07 | Remover Livro                  |');
    console.log('| 08 | Listar Livros Disponíveis      |');
    console.log('| 09 | Filtrar Livros Por Gênero      |');
    console.log('| 10 | Ordenar Livros Por Ano         |');
    console.log('| 11 | Registrar Empréstimo           |');
    console.log('| 12 | Gerar Relatório de Empréstimos |');
    console.log('| 00 | Sair                           |');
    console.log('=======================================');

    rl.question("Escolha uma opção: ", (opcao) => {
        tratarOpcao(opcao);
    })
}

function tratarOpcao(opcao) {
  switch (opcao) {
    case "01":
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

    case "02":
        listarLivros();
        exibirMenu();
        break;

    case "03":
        rl.question("Título do Livro: ", (titulo) => {
            buscarLivroPorTitulo(titulo);
            exibirMenu();
        });
        break;

    case "04":
        rl.question("Autor do Livro: ", (autor) => {
            buscarLivroPorAutor(autor);
            exibirMenu();
        });
        break;

    case "05":
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

    case "06":
        rl.question("ID do livro para alterar disponibilidade: ", (id) => {
            alterarDisponibilidade(parseInt(id));
            exibirMenu();
        });
        break;

    case "07":
        rl.question("ID do livro para remover: ", (id) => {
            removerLivro(parseInt(id));
            exibirMenu();
        });
        break;

    case "08":
        listarLivrosDisponiveis();
        exibirMenu();
        break;
    
    case "09":
        rl.question("Digite o gênero para filtrar: ", (genero) => {
            listarLivrosPorGenero(genero);
            exibirMenu();
        });
        break;
    
    case "10":
        rl.question("Ordenar por ano ('crescente' ou 'decrescente'): ", (ordem) => {
            ordenarLivrosPorAno(ordem);
            exibirMenu();
        });
        break;

    case "11":
        rl.question("ID do livro para empréstimo: ", (idLivro) => {
            rl.question("Nome da pessoa: ", (nomePessoa) => {
                rl.question("Data de devolução (DD/MM/AAAA): ", (dataDevolucao) => {
                    registrarEmprestimo(parseInt(idLivro), nomePessoa, dataDevolucao);
                    exibirMenu();
                });
            });
        });
        break;

    case "12":
        gerarRelatorioEmprestimos();
        exibirMenu();
        break;

    case "00":
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