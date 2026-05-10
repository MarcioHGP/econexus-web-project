// Dados simulados (Array de objetos)
const descartes = [
    { data: "12/04/2026", material: "Papelão / Papel", peso: 5.2, status: "✔ Concluído" },
    { data: "05/04/2026", material: "Plástico PET", peso: 2.8, status: "✔ Concluído" },
    { data: "01/04/2026", material: "Metal / Latas", peso: 1.5, status: "✔ Concluído" }
];

// Função para construir a tabela automaticamente
function carregarHistorico() {
    const corpoTabela = document.getElementById("tabela-descartes");
    
    // Limpa o conteúdo atual
    corpoTabela.innerHTML = "";

    // Percorre cada item da lista e cria a linha HTML
    descartes.forEach(item => {
        const linha = `
            <tr>
                <td>${item.data}</td>
                <td>${item.material}</td>
                <td>${item.peso}</td>
                <td class="status-concluido">${item.status}</td>
            </tr>
        `;
        corpoTabela.innerHTML += linha;
    });
}

// Executa a função assim que a página carrega
window.onload = carregarHistorico;