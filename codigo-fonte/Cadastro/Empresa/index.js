/**
 * EcoNexus - Cadastro (EMPRESA)
 * Sistema de cadastro para pessoas físicas com validações em tempo real
 * e armazenamento automático de dados no navegador (LocalStorage).
 */
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('registerForm');
    const menuBtn = document.getElementById('menuBtn');

    const cepInput = document.getElementById('cep');
    const emailInput = document.getElementById('email');
    const usuarioInput = document.getElementById('usuario');
    const cnpjInput = document.getElementById('cnpj');

    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    
    // SWEET ALERT TOAST
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });

    
    // LOCALSTORAGE
    
    const getUsers = () =>
        JSON.parse(localStorage.getItem('@EcoNexus:usuarios') || '[]');

    const saveUsers = (data) =>
        localStorage.setItem('@EcoNexus:usuarios', JSON.stringify(data));

    


    // Botão de voltar: leva o usuário de volta à tela de seleção
    menuBtn?.addEventListener('click', () => {
        window.location.href = '../Selação/index.html';
    });
    
    // EMAIL VALIDATION
    
    const validarEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    emailInput?.addEventListener('blur', (e) => {
        if (e.target.value && !validarEmail(e.target.value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Email inválido',
                text: 'Digite um email válido.'
            });
        }
    });

    
    // USUÁRIO EXISTENTE
    
    usuarioInput?.addEventListener('blur', (e) => {
        const users = getUsers();
        const exists = users.some(u => u.usuario === e.target.value);

        if (exists) {
            Swal.fire({
                icon: 'warning',
                title: 'Usuário já existe'
            });
        }
    });

    
    // SENHAS IGUAIS
    
    const validarSenhas = () => {
        if (
            senhaInput.value &&
            confirmarSenhaInput.value &&
            senhaInput.value !== confirmarSenhaInput.value
        ) {
            Swal.fire({
                icon: 'warning',
                title: 'Senhas não coincidem'
            });
        }
    };

    senhaInput?.addEventListener('blur', validarSenhas);
    confirmarSenhaInput?.addEventListener('blur', validarSenhas);

    
    // TOGGLE SENHA
    
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById(btn.dataset.target);
            if (!input) return;

            input.type = input.type === 'password' ? 'text' : 'password';
            btn.textContent = input.type === 'password' ? '👁' : '🔒';
        });
    });

    
    // CNPJ FORMAT
    
    cnpjInput?.addEventListener('input', () => {
        let v = cnpjInput.value.replace(/\D/g, '');

        v = v.replace(/(\d{2})(\d)/, '$1.$2')
             .replace(/(\d{3})(\d)/, '$1.$2')
             .replace(/(\d{3})(\d)/, '$1/$2')
             .replace(/(\d{4})(\d{1,2})$/, '$1-$2');

        cnpjInput.value = v;
    });

    
    // CNPJ VALIDATION
    
    cnpjInput?.addEventListener('blur', () => {
        const cnpj = cnpjInput.value.replace(/\D/g, '');
        if (cnpj.length > 0 && cnpj.length !== 14) {
            Swal.fire({
                icon: 'warning',
                title: 'CNPJ inválido',
                text: 'Digite um CNPJ válido com 14 dígitos.'
            });
        }
    });

    
    // CEP 
    
    cepInput?.addEventListener('blur', async () => {
        const cep = cepInput.value.replace(/\D/g, '');

        if (cep.length !== 8) {
            if (cep.length > 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'CEP inválido',
                    text: 'O CEP deve ter 8 dígitos.'
                });
            }
            return;
        }

        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await res.json();

            if (!data.erro) {
                document.getElementById('bairro').value = data.bairro || '';
                document.getElementById('rua').value = data.logradouro || '';
                document.getElementById('numero')?.focus();

                Toast.fire({
                    icon: 'success',
                    title: 'Endereço encontrado!'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'CEP não encontrado'
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao consultar CEP'
            });
        }
    });

    
    // SUBMIT (COOPERATIVA)
    

    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const users = getUsers();

        const nome = document.getElementById('nome').value.trim();
        const usuario = usuarioInput.value.trim();
        const email = emailInput.value.trim();
        const cnpj = cnpjInput.value.trim();

        const cep = cepInput.value.trim();
        const bairro = document.getElementById('bairro').value.trim();
        const rua = document.getElementById('rua').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const pontoReferencia = document.getElementById('ponto_referencia').value.trim();

        const senha = senhaInput.value.trim();
        const confirmarSenha = confirmarSenhaInput.value.trim();

        // validação básica
        if (!nome || !usuario || !email || !cnpj || !cep || !bairro || !rua || !numero || !senha || !confirmarSenha) {
            return Swal.fire({
                icon: 'warning',
                title: 'Preencha todos os campos'
            });
        }

        if (!validarEmail(email)) {
            return Swal.fire({
                icon: 'error',
                title: 'Email inválido'
            });
        }

        if (senha !== confirmarSenha) {
            return Swal.fire({
                icon: 'error',
                title: 'Senhas diferentes'
            });
        }

        // duplicado
        const exists = users.some(u =>
            u.email === email ||
            u.usuario === usuario ||
            u.cnpj === cnpj
        );

        if (exists) {
            return Swal.fire({
                icon: 'error',
                title: 'Já cadastrado'
            });
        }

        // salva
        const newCompany = {
            tipo: 'cooperativa',
            nome,
            usuario,
            email,
            cnpj,
            endereco: {
                cep,
                bairro,
                rua,
                numero,
                pontoReferencia
            },
            senha,
            createdAt: new Date().toISOString()
        };

        users.push(newCompany);
        saveUsers(users);

        Swal.fire({
            icon: 'success',
            title: 'Cooperativa cadastrada com sucesso!'
        }).then(() => {
            form.reset();
            window.location.href = '../Seleção/index.html';
        });
    });

});