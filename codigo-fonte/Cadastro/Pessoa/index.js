/**
 * EcoNexus - Cadastro (Pessoas Físicas)
 * Sistema de cadastro para pessoas físicas com validações em tempo real
 * e armazenamento automático de dados no navegador (LocalStorage).
 */

// Aguarda o carregamento completo da página para inicializar
document.addEventListener('DOMContentLoaded', () => {
    // Pega referência do formulário e dos campos principais
    const registerForm = document.getElementById('registerForm');
    const cpfInput = document.getElementById('cpf');
    const cepInput = document.getElementById('cep');
    const menuBtn = document.getElementById('menuBtn');

    // Configura notificações rápidas (toasts) que aparecem no canto da tela
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });

    // Botão de voltar: leva o usuário de volta à tela de seleção
    menuBtn?.addEventListener('click', () => {
        window.location.href = '../Selação/index.html';
    });

    // Formata o CPF automaticamente enquanto o usuário digita
    // Ex: 12345678901 vira 123.456.789-01
    cpfInput?.addEventListener('input', () => {
        let value = cpfInput.value.replace(/\D/g, '');
        value = value
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpfInput.value = value;
    });

    // Busca o endereço automaticamente quando o usuário sai do campo de CEP
    // Usa a API ViaCEP para preencher bairro e rua automaticamente
    cepInput?.addEventListener('blur', async () => {
        const cep = cepInput.value.replace(/\D/g, '');
        // Verifica se o CEP tem 8 dígitos (formato correto)
        if (cep.length !== 8) {
            if (cep.length > 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'CEP incompleto',
                    text: 'O CEP deve ter 8 dígitos.',
                    confirmButtonColor: '#0165b0'
                });
            }
            return;
        }

        try {
            // Faz a requisição para o servidor ViaCEP
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            // Se encontrou o CEP, preenche os campos automaticamente
            if (!data.erro) {
                document.getElementById('bairro').value = data.bairro || '';
                document.getElementById('rua').value = data.logradouro || '';
                document.getElementById('numero').focus(); // Leva o foco para o próximo campo
                Toast.fire({ icon: 'success', title: 'Endereço localizado!' });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'CEP não encontrado',
                    text: 'Confira o CEP e tente novamente.',
                    confirmButtonColor: '#0165b0'
                });
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            Swal.fire({
                icon: 'error',
                title: 'Erro de conexão',
                text: 'Não foi possível consultar o CEP no momento.',
                confirmButtonColor: '#0165b0'
            });
        }
    });

    // Valida se o CPF tem o número correto de dígitos (11) quando o usuário sai do campo
    cpfInput?.addEventListener('blur', () => {
        const cpf = cpfInput.value.replace(/\D/g, '');
        if (cpf.length > 0 && cpf.length !== 11) {
            Swal.fire({
                icon: 'warning',
                title: 'CPF incompleto',
                text: 'O CPF deve ter 11 dígitos.',
                confirmButtonColor: '#0165b0',
                timer: 2000,
                timerProgressBar: true
            });
            cpfInput.focus();
        }
    });

    // Valida se o email tem um formato correto quando o usuário sai do campo
    document.getElementById('email')?.addEventListener('blur', (e) => {
        const email = e.target.value.trim();
        if (email && !validarEmail(email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Email inválido',
                text: 'Digite um email válido.',
                confirmButtonColor: '#0165b0',
                timer: 2000,
                timerProgressBar: true
            });
            e.target.focus();
        }
    });

    // Valida se as duas senhas digitadas são iguais quando o usuário sai de um dos campos
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    const validarSenhas = () => {
        if (senhaInput.value && confirmarSenhaInput.value && senhaInput.value !== confirmarSenhaInput.value) {
            Swal.fire({
                icon: 'warning',
                title: 'Senhas não correspondem',
                text: 'As senhas devem ser iguais.',
                confirmButtonColor: '#0165b0',
                timer: 2000,
                timerProgressBar: true
            });
        }
    };

    // Ativa a validação de senhas ao sair de qualquer campo de senha
    senhaInput?.addEventListener('blur', validarSenhas);
    confirmarSenhaInput?.addEventListener('blur', validarSenhas);

    // Verifica se o nome de usuário já está cadastrado no sistema
    document.getElementById('usuario')?.addEventListener('blur', (e) => {
        const usuario = e.target.value.trim();
        if (usuario) {
            // Carrega os cadastros salvos no navegador
            const usuarios = JSON.parse(localStorage.getItem('@EcoNexus:usuarios') || '[]');
            // Procura se este usuário já existe
            const existe = usuarios.some(u => u.usuario === usuario);
            if (existe) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Usuário já existe',
                    text: 'Este nome de usuário já está em uso.',
                    confirmButtonColor: '#0165b0',
                    timer: 2000,
                    timerProgressBar: true
                });
                e.target.focus();
            }
        }
    });

    // Botões para mostrar/esconder a senha (olho de visualização)
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;

            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = '🔒';
            } else {
                input.type = 'password';
                button.textContent = '👁';
            }
        });
    });

    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    registerForm?.addEventListener('submit', (event) => {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Coleta todos os valores dos campos do formulário
        const nome = document.getElementById('nome').value.trim();
        const usuario = document.getElementById('usuario').value.trim();
        const cpf = cpfInput.value.trim();
        const email = document.getElementById('email').value.trim();
        const cep = cepInput.value.trim();
        const bairro = document.getElementById('bairro').value.trim();
        const rua = document.getElementById('rua').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const pontoReferencia = document.getElementById('ponto_referencia').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!nome || !usuario || !cpf || !email || !cep || !bairro || !rua || !numero || !senha || !confirmarSenha) {
            Swal.fire({
                icon: 'warning',
                title: 'Preencha todos os campos',
                text: 'Todos os campos obrigatórios devem ser preenchidos.',
                confirmButtonColor: '#0165b0'
            });
            return;
        }

        // Valida o formato do email
        if (!validarEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Email inválido',
                text: 'Digite um email válido.',
                confirmButtonColor: '#0165b0'
            });
            return;
        }

        // Verifica se as senhas são idênticas
        if (senha !== confirmarSenha) {
            Swal.fire({
                icon: 'error',
                title: 'Senhas diferentes',
                text: 'A senha e a confirmação devem ser iguais.',
                confirmButtonColor: '#ef4444'
            });
            return;
        }

        // Carrega os cadastros já feitos do navegador
        const usuarios = JSON.parse(localStorage.getItem('@EcoNexus:usuarios') || '[]');
        // Verifica se email ou usuário já foram cadastrados antes
        const jaExiste = usuarios.some(user => user.email.toLowerCase() === email.toLowerCase() || user.usuario === usuario);

        if (jaExiste) {
            Swal.fire({
                icon: 'error',
                title: 'Cadastro duplicado',
                text: 'Este email ou usuário já estão cadastrados. Use outros dados.',
                confirmButtonColor: '#ef4444',
                timer: 3000,
                timerProgressBar: true
            });
            return;
        }

        // Monta o objeto com os dados da nova pessoa
        const novoUsuario = {
            tipo: 'pessoa',
            nome,
            usuario,
            cpf,
            email,
            endereco: {
                cep,
                bairro,
                rua,
                numero,
                pontoReferencia
            },
            senha,
            cadastradoEm: new Date().toISOString()
        };

        // Adiciona o novo cadastro à lista e salva tudo no navegador (localStorage)
        usuarios.push(novoUsuario);
        localStorage.setItem('@EcoNexus:usuarios', JSON.stringify(usuarios));

        // Mostra mensagem de sucesso personalizada com o nome do usuário
        Swal.fire({
            icon: 'success',
            title: 'Cadastro realizado com sucesso!',
            text: `Bem-vindo(a), ${nome}! Sua conta foi criada com sucesso.`,
            confirmButtonColor: '#22c55e',
            timer: 2500,
            timerProgressBar: true
        }).then(() => {
            // Limpa os campos do formulário
            registerForm.reset();
            // Mostra mensagem de redirecionamento
            Toast.fire({ icon: 'success', title: 'Redirecionando...' });
            // Aguarda e volta para a tela de seleção
            setTimeout(() => {
                window.location.href = '../Selação/index.html';
            }, 600);
        });
    });
});
