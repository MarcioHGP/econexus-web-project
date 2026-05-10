let materialSelecionado = "";

        const pontosColeta = [
            { id: 1, bairro: "BARREIRO DE BAIXO", endereco: "Rua Vicente de Azevedo, 301 - Gelu Barreiro", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 17h, Sáb: 8h às 12h" },
            { id: 2, bairro: "CONJUNTO TÚNEL DE IBIRITÉ", endereco: "Rua Marly Passos, 10 - URPV Túnel", materiais: ["Vidro"], horario: "Seg a Sex: 7h às 18h, Sáb e Dom: 7h40 às 16h" },
            { id: 3, bairro: "LINDEIA", endereco: "Rua Antônio de Souza Gomes, 110 - URPV Lindeia", materiais: ["Vidro"], horario: "Seg a Sex: 7h às 18h, Sáb e Dom: 7h40 às 16h" },
            { id: 4, bairro: "MIRAMAR", endereco: "Av. Olinto Meireles - Praça José Verano da Silva", materiais: ["Vidro"], horario: "24 horas" },
            { id: 5, bairro: "CENTRO", endereco: "Av. Afonso Pena, 1.377 - Parque Municipal", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Ter a Sáb: 7h às 20h30, Dom: 7h às 16h30" },
            { id: 6, bairro: "CENTRO", endereco: "Av. dos Andradas, 787 - Parque Municipal", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Ter a Sáb: 7h às 20h30, Dom: 7h às 16h30" },
            { id: 7, bairro: "FUNCIONÁRIOS", endereco: "Av. Getúlio Vargas, 20 (Esq. Contorno)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 8, bairro: "FUNCIONÁRIOS", endereco: "Rua dos Aimorés (Esq. Alagoas)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 9, bairro: "FUNCIONÁRIOS", endereco: "Rua dos Timbiras (Esq. Afonso Pena)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 10, bairro: "SANTA LÚCIA", endereco: "Av. Arthur Bernardes, 3.951", materiais: ["Vidro"], horario: "24 horas" },
            { id: 11, bairro: "SANTO ANTÔNIO", endereco: "Av. Prudente de Morais (Esq. Joaquim Murtinho)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 12, bairro: "SÃO BENTO", endereco: "Av. Raja Gabáglia, 2.671 (Estac. Porcão)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 13, bairro: "SÃO BENTO", endereco: "Av. Raja Gabáglia, 3.385 (Raja Grill)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 14, bairro: "SAVASSI", endereco: "Av. Getúlio Vargas (Esq. Inconfidentes)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 15, bairro: "CASA BRANCA", endereco: "Av. dos Andradas, 8.255 - URPV Copasa", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 18h, Sáb e Dom: 7h40 às 16h" },
            { id: 16, bairro: "FLORESTA", endereco: "Praça Comendador Negrão de Lima", materiais: ["Vidro"], horario: "24 horas" },
            { id: 17, bairro: "FLORESTA", endereco: "Rua Sapucaí (Esq. Assis Chateaubriand)", materiais: ["Vidro"], horario: "24 horas" },
            { id: 18, bairro: "HORTO FLORESTAL", endereco: "Av. dos Andradas, 5.965 - URPV Andradas", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 18h, Sáb e Dom: 7h40 às 16h" },
            { id: 19, bairro: "HORTO FLORESTAL", endereco: "Rua Santo Agostinho, 1.717 (Senai)", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 21h" },
            { id: 20, bairro: "EYMARD", endereco: "Rua Lídia (Parque Guilherme Lage)", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "24 horas" },
            { id: 21, bairro: "IPIRANGA", endereco: "Rua Princesa Leopoldina, 485 - Gelu Nordeste", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 17h, Sáb: 8h às 12h" },
            { id: 22, bairro: "SÃO BERNARDO", endereco: "Av. Washington Luiz, 941 - URPV Aeroporto", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 18h, Sáb e Dom: 7h40 às 16h" },
            { id: 23, bairro: "SALGADO FILHO", endereco: "Rua Conselheiro Pires da Mota, 205 - Gelu Oeste", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 17h, Sáb: 8h às 12h" },
            { id: 24, bairro: "ZOOLÓGICO", endereco: "Diversos pontos internos (Aquário/Administração)", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Ter a Dom: 8h às 16h" },
            { id: 25, bairro: "RIO BRANCO", endereco: "Rua Augusto dos Anjos, 1.983 - URPV Rio Branco", materiais: ["Papel", "Metal", "Plástico", "Isopor", "Vidro"], horario: "Seg a Sex: 7h às 18h, Sáb e Dom: 7h40 às 16h" }
        ];

        // Armazenar no LocalStorage para que a página pontos.html possa acessar
        localStorage.setItem('todosPontosColeta', JSON.stringify(pontosColeta));

        function selecionarMaterial(material, elemento) {
            document.querySelectorAll('.material-item').forEach(item => item.classList.remove('ativo'));
            elemento.classList.add('ativo');
            materialSelecionado = material;
            buscarPontos();
        }

        function buscarPontos() {
            const texto = document.getElementById('filtro-texto').value.toLowerCase();
            const container = document.getElementById('resultado');
            const countLabel = document.getElementById('resultado-count');
            container.innerHTML = "";

            const filtrados = pontosColeta.filter(ponto => {
                const matchTexto = ponto.bairro.toLowerCase().includes(texto) || ponto.endereco.toLowerCase().includes(texto);
                const matchMaterial = materialSelecionado === "" || ponto.materiais.includes(materialSelecionado);
                return matchTexto && matchMaterial;
            });

            countLabel.innerText = `${filtrados.length} ponto(s) encontrado(s)`;

            filtrados.forEach(ponto => {
                container.innerHTML += `
                    <div class="col-md-6 col-lg-4">
                        <div class="coop-card">
                            <div class="flex-grow-1">
                                <span class="badge bg-dark mb-2">${ponto.bairro}</span>
                                <h6 class="fw-bold mb-3">${ponto.endereco}</h6>
                                <p class="small text-secondary mb-3"><i class="bi bi-clock-fill me-2"></i>${ponto.horario}</p>
                                
                                <div class="mb-3">
                                    ${ponto.materiais.map(m => `<span class="badge bg-success-subtle text-success me-1">${m}</span>`).join('')}
                                </div>
                            </div>
                            <a href="pontos.html?id=${ponto.id}" class="btn-tela-cheia">
                                <i class="bi bi-arrows-fullscreen me-2"></i>Tela Cheia
                            </a>
                        </div>
                    </div>
                `;
            });
        }

        window.onload = () => {
            const user = JSON.parse(localStorage.getItem('usuarioLogado'));
            if(user) document.getElementById('navUserName').innerText = user.nome.split(' ')[0];
            buscarPontos();
        };