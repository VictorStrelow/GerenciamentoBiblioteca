let catalogo = [];
let idAtual = 1;

// Função para adicionar um livro
function adicionarLivro(titulo, autor, ano, genero) {
    // Validações
    if (!titulo || titulo.trim() === "") {
        console.log("ERRO: O título do livro não pode ser vazio!");
        return;
    }

    if (!autor || autor.trim() === "") {
        console.log("ERRO: O autor do livro não pode ser vazio!");
        return;
    }

    if (!ano || isNaN(ano) || parseInt(ano) <= 0) {
        console.log("ERRO: O ano de publicação deve ser um número válido maior que 0!");
        return;
    }

    if (!genero || genero.trim() === "") {
        console.log("ERRO: O gênero do livro não pode ser vazio!");
        return;
    }

    const tituloExistente = catalogo.some(
        (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (tituloExistente) {
        console.log(`ERRO: Já existe um livro com o título ${titulo} no catálogo!`);
        return;
    }

    // Criação do livro
    const novoLivro = {
        id: idAtual++,
        titulo,
        autor,
        ano,
        genero,
        disponibilidade: true,
    };

    catalogo.push(novoLivro);
    console.log(`LIVRO ${titulo} ADICIONADO COM SUCESSO!`);
}

// Função para listar todos os livros
function listarLivros() {
    console.log('\nCATÁLOGO DE LIVROS');

    if  (catalogo.length === 0) {
        console.log('NENHUM LIVRO CADASTRADO!');
        return;
    }

    catalogo.forEach((livro) => {
        console.log(`----------------------------------------`);
        console.log(`| ID: ${livro.id}`);
        console.log(`| TÍTULO: ${livro.titulo}`);
        console.log(`| AUTOR: ${livro.autor}`);
        console.log(`| ANO DE PUBLICAÇÃO: ${livro.ano}`);
        console.log(`| GÊNERO: ${livro.genero}`);
        console.log(`| DISPONÍVEL: ${livro.disponibilidade ? "Disponível" : "Indisponível"}`);
        console.log(`----------------------------------------`);
    });
}

// Função para buscar livro por título
function buscarLivroPorTitulo(titulo) {
    const livro = catalogo.find(
        (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (!livro) {
        console.log(`LIVRO NÃO ENCONTRADO!`);
        return;
    }

    console.log(`\nLIVRO ENCONTRADO!`);
    console.log(`----------------------------------------`);
    console.log(`| ID: ${livro.id}`);
    console.log(`| TÍTULO: ${livro.titulo}`);
    console.log(`| AUTOR: ${livro.autor}`);
    console.log(`| ANO DE PUBLICAÇÃO: ${livro.ano}`);
    console.log(`| GÊNERO: ${livro.genero}`);
    console.log(`| DISPONÍVEL: ${livro.disponibilidade ? "Disponível" : "Insisponível"}`);
    console.log(`----------------------------------------`);
}

// Função para editar livro
function editarLivro(id, novoTitulo, novoAutor, novoAno, novoGenero) {
    const livro = catalogo.find(
        (l) => l.id === id
    );

    if (!livro) {
        console.log(`LIVRO NÃO ENCONTRADO!`);
        return;
    }

    // Validações
    if (novoTitulo !== undefined && novoTitulo.trim() === "") {
        console.log("ERRO: O título não pode ser vazio!");
        return;
    }

    if (novoAutor !== undefined && novoAutor.trim() === "") {
        console.log("ERRO: O autor não pode ser vazio!");
        return;
    }

    if (novoAno !== undefined && (isNaN(novoAno) || parseInt(novoAno) <= 0)) {
        console.log("ERRO: O ano de publicação deve ser um número válido maior que 0!");
        return;
    }

    if (novoGenero !== undefined && novoGenero.trim() === "") {
        console.log("ERRO: O gênero não pode ser vazio!");
        return;
    }

    if (novoTitulo !== undefined) {
        const tituloDuplicado = catalogo.some(
            (l) =>
                l.titulo.toLowerCase() === novoTitulo.toLowerCase() &&
                l.id !== id
        );
        
        if (tituloDuplicado) {
            console.log(`ERRO: Já existe um livro com o título "${novoTitulo}" no catálogo!`);
            return;
        }
    }

    // Aplica alterações
    if (novoTitulo !== undefined) livro.titulo = novoTitulo;
    if (novoAutor !== undefined) livro.autor = novoAutor;
    if (novoAno !== undefined) livro.ano = novoAno;
    if (novoGenero !== undefined) livro.genero = novoGenero;

    console.log(`LIVRO COM ID ${livro.id} EDITADO COM SUCESSO!`);
}

// Função para alterar disponibilidade
function alterarDisponibilidade(id) {
    const livro = catalogo.find(
        (l) => l.id === id
    );

    if (!livro) {
        console.log(`LIVRO NÃO ENCONTRADO!`);
        return;
    }

    livro.disponibilidade = !livro.disponibilidade;

    console.log(`DISPONIBILIDADE DO LIVRO ${livro.titulo} ALTERADA PARA: ${livro.disponibilidade ? "Disponível" : "Indisponível"}`);
}

// Função para remover livro
function removerLivro(id) {
    const index = catalogo.findIndex(
        (l) => l.id === id
    );

    if (index !== -1) {
        const removido = catalogo.splice(index, 1);

        console.log(`LIVRO ${removido[0].titulo} REMOVIDO COM SUCESSO!`);
    } else {
        console.log(`LIVRO NÃO ENCONTRADO!`);
    }
}

// Função de filtro de disponibilidade
function filtroDisponibilidade() {
    const disponiveis = catalogo.filter(
        (l) => l.disponibilidade
    );

    if (disponiveis.length === 0) {
        console.log(`NENHUM LIVRO DISPONÍVEL NO MOMENTO!`);
        return;
    }

    console.log(`\nLIVROS DISPONÍVEIS ENCONTRADOS!`);

    disponiveis.forEach((livro) => {
        console.log(`----------------------------------------`);
        console.log(`| ID: ${livro.id}`);
        console.log(`| TÍTULO: ${livro.titulo}`);
        console.log(`| AUTOR: ${livro.autor}`);
        console.log(`| ANO DE PUBLICAÇÃO: ${livro.ano}`);
        console.log(`| GÊNERO: ${livro.genero}`);
        console.log(`----------------------------------------`);
    });
}

// Função para buscar livro por autor
function buscarLivroPorAutor(autor) {
    const livro = catalogo.find(
        (l) => l.autor.toLowerCase() === autor.toLowerCase()
    );

    if (!livro) {
        console.log(`LIVRO NÃO ENCONTRADO!`);
        return;
    }

    console.log(`\nLIVRO ENCONTRADO!`);
    console.log(`----------------------------------------`);
    console.log(`| ID: ${livro.id}`);
    console.log(`| TÍTULO: ${livro.titulo}`);
    console.log(`| AUTOR: ${livro.autor}`);
    console.log(`| ANO DE PUBLICAÇÃO: ${livro.ano}`);
    console.log(`| GÊNERO: ${livro.genero}`);
    console.log(`| DISPONÍVEL: ${livro.disponibilidade ? "Disponível" : "Insisponível"}`);
    console.log(`----------------------------------------`);
}

export {
    adicionarLivro,
    listarLivros,
    buscarLivroPorTitulo,
    editarLivro,
    alterarDisponibilidade,
    removerLivro,
    filtroDisponibilidade,
    buscarLivroPorAutor
};