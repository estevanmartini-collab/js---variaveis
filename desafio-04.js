let usuarios = []; // Array para armazenar os usuários

function adicionarUsuario() {
    let nome = prompt("Digite o nome:");
    let idade = parseInt(prompt("Digite a idade:"));
    let email = prompt("Digite o e-mail:");

    // Verifica se o e-mail já existe
    let emailExistente = usuarios.find(usuario => usuario.email === email);

    if (emailExistente) {
        alert("Erro! Este e-mail já está cadastrado.");
    } else {
        usuarios.push({ nome, idade, email });
        alert("Usuário adicionado com sucesso!");
    }
}

function removerUsuario() {
    let email = prompt("Digite o e-mail do usuário a ser removido:");
    let index = usuarios.findIndex(usuario => usuario.email === email);

    if (index !== -1) {
        usuarios.splice(index, 1);
        alert("Usuário removido com sucesso!");
    } else {
        alert("E-mail não encontrado.");
    }
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        alert("Nenhum usuário cadastrado.");
    } else {
        let lista = "Usuários cadastrados:\n";
        usuarios.forEach((usuario, index) => {
            lista += `${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, E-mail: ${usuario.email}\n`;
        });
        alert(lista);
    }
}

function menu() {
    let opcao;
    do {
        opcao = prompt("Escolha uma opção:\n1 - Adicionar Usuário\n2 - Remover Usuário\n3 - Listar Usuários\n4 - Sair");

        switch (opcao) {
            case "1":
                adicionarUsuario();
                break;
            case "2":
                removerUsuario();
                break;
            case "3":
                listarUsuarios();
                break;
            case "4":
                alert("Saindo do programa...");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== "4");
}

// Iniciar o programa
menu();