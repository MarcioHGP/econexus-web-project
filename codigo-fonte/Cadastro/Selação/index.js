document.addEventListener('DOMContentLoaded', () => {
    // Obtém os elementos dos botões de seleção
    const pessoaBtn = document.getElementById('pessoaBtn');
    const empresaBtn = document.getElementById('empresaBtn');

    // Configuração do Toast para notificações rápidas
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });

    // Função para navegar para a página de cadastro, salvando o tipo no localStorage
    function navegarPara(tipo, url) {
        try {
            // Salva o tipo de cadastro selecionado no localStorage
            localStorage.setItem('@EcoNexus:tipoCadastro', tipo);
            // Mostra toast de confirmação
            Toast.fire({ icon: 'success', title: `${tipo === 'cidadao' ? 'Pessoa' : 'Empresa'} selecionada` });
            // Redireciona após um pequeno delay para mostrar o toast
            setTimeout(() => {
                window.location.href = url;
            }, 600);
        } catch (error) {
            console.error('Erro ao salvar tipo de cadastro:', error);
            // Em caso de erro, redireciona mesmo assim
            window.location.href = url;
        }
    }

    // Evento de clique para o botão de pessoa
    pessoaBtn?.addEventListener('click', () => navegarPara('cidadao', '../Pessoa/index.html'));
    // Evento de clique para o botão de empresa
    empresaBtn?.addEventListener('click', () => navegarPara('cooperativa', '../Empresa/index.html'));

    // Adiciona suporte a teclado para acessibilidade
    [pessoaBtn, empresaBtn].forEach(button => {
        button?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                button.click();
            }
        });
    });
});