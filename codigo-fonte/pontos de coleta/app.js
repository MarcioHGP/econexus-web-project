  
        function carregarDetalhes() {
            // 1. Pegar o ID da URL
            const urlParams = new URLSearchParams(window.location.search);
            const id = parseInt(urlParams.get('id'));

            // 2. Pegar a lista de pontos do LocalStorage (ou usar o array se estivesse em um arquivo .js separado)
            const pontos = JSON.parse(localStorage.getItem('todosPontosColeta'));
            const container = document.getElementById('ponto-info');

            if (!id || !pontos) {
                container.innerHTML = `
                    <div class="text-center">
                        <h2 class="fw-bold">Ops!</h2>
                        <p>Ponto de coleta não encontrado.</p>
                        <a href="filtros.html" class="btn btn-dark rounded-pill px-4">Voltar para a busca</a>
                    </div>`;
                return;
            }

            // 3. Procurar o ponto específico
            const ponto = pontos.find(p => p.id === id);

            if (ponto) {
                container.innerHTML = `
                    <a href="javascript:history.back()" class="btn-voltar">
                        <i class="bi bi-arrow-left me-2"></i>Voltar
                    </a>
                    
                    <div class="text-center mb-4 mt-4">
                        <span class="badge bg-dark px-3 py-2 rounded-pill mb-2">${ponto.bairro}</span>
                        <h1 class="fw-bold">${ponto.endereco}</h1>
                    </div>

                    <div class="map-placeholder">
                        <div>
                            <i class="bi bi-geo-alt-fill d-block text-center fs-1"></i>
                            Mapa Interativo em breve
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-6">
                            <h5 class="fw-bold"><i class="bi bi-clock me-2"></i>Horário de Funcionamento</h5>
                            <p class="text-secondary">${ponto.horario}</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <h5 class="fw-bold">Materiais Aceitos</h5>
                            <div>
                                ${ponto.materiais.map(m => `<span class="badge-material">${m}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <button class="btn-rota shadow" onclick="abrirMapa('${ponto.endereco}')">
                        <i class="bi bi-signpost-split me-2"></i>Como chegar (Google Maps)
                    </button>
                `;
            }
        }

        function abrirMapa(endereco) {
            const query = encodeURIComponent(endereco + " Belo Horizonte MG");
            window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
        }

        window.onload = carregarDetalhes;
