var botaoEnviar = document.getElementById("enviar-formulario");

botaoEnviar.addEventListener('click', function (e) {
    e.preventDefault();
    adicionarDados();
});

function adicionarDados() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome === '' || telefone === '') {
        alert('Por favor, preencha ambos os campos: Nome e Telefone.');
        return;
    }

    console.log('adicionando dados');

    let novaLinha = '<tr>';
    novaLinha += `<td>${nome}</td>`;
    novaLinha += `<td>${telefone}</td>`;
    novaLinha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += novaLinha;

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
