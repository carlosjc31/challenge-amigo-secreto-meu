
let amigos = [];


function adicionarAmigo() {

    const input = document.getElementById('amigo');
    const nome = input.value.trim();


    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }


    amigos.push(nome);


    atualizarLista();


    input.value = '';
}


function atualizarLista() {
    const lista = document.getElementById('listaAmigos');

    
    lista.innerHTML = '';

    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Nenhum amigo na lista para sortear.');
        return;
    }

 
    const indiceSorteado = Math.floor(Math.random() * amigos.length);


    const amigoSorteado = amigos[indiceSorteado];


    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
