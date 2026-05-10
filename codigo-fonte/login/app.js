document.getElementById('formLogin').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const tipoSelecionado = document.querySelector('input[name="tipoLogin"]:checked').value;

        // Recupera os usuários do LocalStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        // Procura um usuário que coincida com e-mail, senha E tipo de conta
        const usuario = usuarios.find(u => 
            u.email === email && 
            u.senha === senha && 
            u.tipo === tipoSelecionado
        );

        if (usuario) {
            // Salva o usuário logado na "sessão" (opcional para persistir o login em outras páginas)
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            
            const saudacao = tipoSelecionado === 'cidadao' ? 'Bem-vindo, ' : 'Olá, Cooperativa ';
            alert('Login realizado! ' + saudacao + usuario.nome);
            
            // Exemplo de redirecionamento condicional:
            if (tipoSelecionado === 'cidadao') {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'dashboard.html';
            }
        } else {
            // Verifica se o erro foi o tipo de conta (ex: tentou logar como cidadão mas é cooperativa)
            const erroTipo = usuarios.find(u => u.email === email && u.senha === senha && u.tipo !== tipoSelecionado);
            
            if (erroTipo) {
                alert('E-mail e senha corretos, mas este cadastro é de uma ' + (erroTipo.tipo === 'cidadao' ? 'conta de Cidadão.' : 'Cooperativa.'));
            } else {
                alert('E-mail ou senha inválidos.');
            }
        }
    });