function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarCadeiraSuperior(qtd);
    } else {
        comprarCadeiraInferior(qtd);
    }
    document.getElementById('qtd').value = '';
}

function comprarPista(qtd) {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > pista) {
        alert("Quantidade indisponivel");
    } else {
        qtdPista = pista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    }
}

function comprarCadeiraSuperior(qtd) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > superior) {
        alert("Quantidade indisponivel");
    } else {
        qtdSuperior = superior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarCadeiraInferior(qtd) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > inferior) {
        alert("Quantidade indisponivel");
    } else {
        qtdInferior = inferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('parabens, deu certo a parada');
    }
}