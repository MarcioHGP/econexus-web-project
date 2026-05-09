 let usuarioLogado = null;

        function obterUsuario() {
            const dadosSession = localStorage.getItem('usuarioLogado');
            if (dadosSession) {
                usuarioLogado = JSON.parse(dadosSession);
                document.getElementById('navUserName').innerText = usuarioLogado.nome.split(' ')[0];
            } else {
                window.location.href = 'login.html';
            }
        }

        function abrirModal(tipo) {
            const overlay = document.getElementById('modalOverlay');
            const content = document.getElementById('modalContent');
            overlay.style.display = 'flex';
            content.innerHTML = "";

            if (tipo === 'pessoal') {
                const labelNome = usuarioLogado.tipo === 'cooperativa' ? 'Razão Social' : 'Nome';
                content.innerHTML = `
                    <h3 class="fw-bold mb-4">Dados da Conta</h3>
                    <p class="mb-2 text-secondary"><strong>Tipo:</strong> ${usuarioLogado.tipo.toUpperCase()}</p>
                    <p class="mb-2"><strong>${labelNome}:</strong> ${usuarioLogado.nome}</p>
                    <p class="mb-2"><strong>Documento:</strong> ${usuarioLogado.documento}</p>
                    <p class="mb-4"><strong>Email:</strong> ${usuarioLogado.email}</p>
                    <button class="btn btn-dark w-100 rounded-pill" onclick="fecharModal()">Ok</button>
                `;
            } 
            else if (tipo === 'endereco') {
                renderEndereco(false);
            }
            else if (tipo === 'notificacoes') {
                content.innerHTML = `
                    <h3 class="fw-bold mb-4">Notificações</h3>
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <span>Alertas de Coleta Próxima</span>
                        <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <span>Novidades da Comunidade</span>
                        <label class="switch"><input type="checkbox"><span class="slider"></span></label>
                    </div>
                    <button class="btn btn-success w-100 rounded-pill" style="background: var(--verde-eco); border:none;" onclick="fecharModal()">Salvar</button>
                `;
            }
        }

        function renderEndereco(editando) {
            const content = document.getElementById('modalContent');
            if (!editando) {
                content.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-bold m-0">Endereço</h3>
                        <button class="btn btn-sm btn-outline-primary rounded-pill" onclick="renderEndereco(true)">Editar</button>
                    </div>
                    <p><strong>Rua:</strong> ${usuarioLogado.rua}, ${usuarioLogado.numero}</p>
                    <p><strong>Bairro:</strong> ${usuarioLogado.bairro}</p>
                    <p class="mb-4"><strong>CEP:</strong> ${usuarioLogado.cep}</p>
                    <button class="btn btn-dark w-100 rounded-pill" onclick="fecharModal()">Fechar</button>
                `;
            } else {
                content.innerHTML = `
                    <h3 class="fw-bold mb-4">Editar Endereço</h3>
                    <input type="text" id="editRua" class="form-control mb-2 rounded-3" value="${usuarioLogado.rua}" placeholder="Rua">
                    <input type="text" id="editNum" class="form-control mb-2 rounded-3" value="${usuarioLogado.numero}" placeholder="Número">
                    <input type="text" id="editBairro" class="form-control mb-3 rounded-3" value="${usuarioLogado.bairro}" placeholder="Bairro">
                    <button class="btn btn-success w-100 rounded-pill mb-2" style="background: var(--verde-eco); border:none;" onclick="salvarEndereco()">Salvar Alterações</button>
                    <button class="btn btn-light w-100 rounded-pill" onclick="renderEndereco(false)">Cancelar</button>
                `;
            }
        }

        function salvarEndereco() {
            usuarioLogado.rua = document.getElementById('editRua').value;
            usuarioLogado.numero = document.getElementById('editNum').value;
            usuarioLogado.bairro = document.getElementById('editBairro').value;
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            alert("Endereço atualizado!");
            renderEndereco(false);
        }

        function logout() {
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'login.html';
        }

        function fecharModal() { document.getElementById('modalOverlay').style.display = 'none'; }

        window.onclick = function(event) {
            if (event.target == document.getElementById('modalOverlay')) fecharModal();
        }

        window.onload = obterUsuario;