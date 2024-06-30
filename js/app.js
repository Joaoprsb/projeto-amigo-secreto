let amigos = [];
function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo");
  let listaDeAmigos = document.getElementById("lista-amigos");
  if (nomeAmigo.value == "" || nomeAmigo.value == amigos) {
    alert(
      "Por favor, verifique se você já utilizou esse nome ou o nome é válido"
    );
  } else {
    if (listaDeAmigos.innerHTML == "") {
      listaDeAmigos.innerHTML = nomeAmigo.value;
      amigos.push(nomeAmigo.value);
    } else {
      listaDeAmigos.innerHTML =
        listaDeAmigos.innerHTML + `, ${nomeAmigo.value}`;
      amigos.push(nomeAmigo.value);
    }
  }
  nomeAmigo.value = "";
}

function sortear() {
  embaralha(amigos);
  let listaSorteio = document.getElementById("lista-sorteio");
  for (i = 0; i < amigos.length; i++) {
    if (i < amigos.length - 1) {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML + `${amigos[i]} tirou ${amigos[i + 1]} <br>`;
    } else {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML + `${amigos[i]} tirou ${amigos[0]} <br>`;
    }
  }
}
function reiniciar() {
  amigos = [];
  document.getElementById("lista-sorteio").innerHTML = "";
  document.getElementById("lista-amigos").innerHTML = "";
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
