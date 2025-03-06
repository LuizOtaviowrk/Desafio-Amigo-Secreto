//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// armazezar nomes
let amigos = [];

// função para para armazenar nome de amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    //avisar que o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor , insira um nome valido.");
        return; 
    }
// avisar que nome está repetido
    if(amigos.includes(nomeAmigo)) {
        alert(`Este nome "${nomeAmigo}" já está na lista.`);
        return;
    }


    // incluir um nome na lista
    amigos.push(nomeAmigo);

    //limpar campo após colocar um nome
    inputAmigo.value = "";

    //atualizar
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML ="";

for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}


 function sortearAmigo() {

    if(amigos.length == 0) {
    alert("Não há amigos suficiente para sortear, por favor, coloque mais um");
    return;
  }

        
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    const amigosSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigosSorteado}</strong>`;
}