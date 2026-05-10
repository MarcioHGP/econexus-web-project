# Especificação do Projeto

## Perfis de Usuários

<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Cidadão</th>
    </tr>
    <tr>
        <td width="150px"><b>Descrição </b></td>
        <td width="600px">Usuário doméstico com acesso a smartphones.</td>
    </tr>
    <tr>
      <td><b>Necessidades</b></td>
      <td>
         <ul>
            <li>Localizar pontos próximos </li>
            <li>Agendar coletas </li>
            <li>Entender o que é reciclável.  </li>
          </ul> 
      </td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Cooperativa</th>
    </tr>
    <tr>
        <td width="150px"><b>Descrição</b></td>
        <td width="600px">Entidade que realiza a coleta e triagem.</td>
    </tr>
    <tr>
      <td><b>Necessidades</b></td>
      <td>
          <ul>
            <li>Receber alertas de coleta </li>
            <li>Gerenciar status de pedidos </li>
            <li>Visualizar mapas de demanda </li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

## Tabela Requisitos e Histórias de Usuário
| ID    | Descrição do Requisito                                      | Eu como...                         | Quero / Desejo / Preciso                                              | Para                                                                 | Responsável       | Página                  | Prioridade |
|-------|-------------------------------------------------------------|------------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------|-------------------|--------------------------|------------|
| RF-01 | permitir o cadastro de usuários com distinção de perfis     | Administrador ou Novo Usuário      | Realizar o cadastro na plataforma com a definição de um perfil específico | Que o sistema restrinja ou libere funcionalidades conforme permissões | Marlon            | Cadastro                | Alta       |
| RF-02 | permitir o login de usuários com distinção de perfis        | Representante de uma Cooperativa   | Realizar um cadastro exclusivo com dados institucionais e geográficos  | Que a plataforma direcione ferramentas específicas                   | Rafael            | Login                   | Alta       |
| RF-03 | exibir um mapa interativo                                   | Usuário                            | Visualizar mapa interativo com pontos recicláveis                      | Me organizar para descarte correto                                  | Bernardo          | Dashboard               | Baixa      |
| RF-04 | permitir anexar fotos na solicitação de coleta              | Usuário                            | Anexar fotos do material                                              | Identificação correta dos resíduos                                  | Tainara           | Pedidos                 | Média      |
| RF-06 | permitir filtro por tipo de material                        | Usuário                            | Filtrar pontos de coleta                                              | Encontrar local adequado rapidamente                                 | Tainara           | Pedidos                 | Alta       |
| RF-07 | permitir solicitações de coleta para cooperativa            | Usuário                            | Solicitar coleta (tipo, quantidade, localização e horário)            | Garantir encaminhamento correto                                     | Tainara           | Pedidos                 | Média      |
| RF-08 | permitir cancelamento de solicitação                        | Usuário                            | Cancelar solicitação                                                  | Evitar erros e pedidos desnecessários                               | Marlon            | Pedidos                 | Média      |
| RF-09 | notificar usuário D-1 via PUSH                              | Usuário                            | Receber notificações PUSH                                             | Acompanhar previsão de coleta                                       | Marlon            | Pedidos                 | Baixa      |
| RF-10 | permitir interface de configurações da conta                | Usuário                            | Acessar e gerenciar dados da conta                                    | Editar e atualizar informações                                      | Bernardo          | Pedidos                 | Alta       |
| RF-11 | permitir postagem de itens para doação                      | Usuário                            | Postar itens                                                          | Permitir visualização e solicitação                                 | Arthur            | Fórum de itens          | Média      |
| RF-12 | permitir cooperativas aceitarem solicitações                | Cooperativa                        | Aceitar solicitações de coleta                                        | Confirmar coleta e notificar usuário                                | Arthur            | Dashboard               | Média      |
| RF-13 | permitir avaliação de cooperativas                          | Usuário                            | Avaliar coleta                                                        | Garantir qualidade e confiabilidade                                 | Mariana           | Dashboard               | Baixa      |
| RF-14 | visualizar histórico e impacto ambiental                    | Usuário                            | Acessar histórico e métricas                                          | Acompanhar contribuição ambiental                                  | Márcio            | Histórico               | Alta       |
| RF-15 | cadastro de pontos de descarte                              | Representante de Ponto de Descarte | Cadastrar dados institucionais e geográficos                          | Permitir visualização de pontos próximos                            | Arthur            | Cadastro                | Alta       |
| RF-16 | reivindicação de itens para doação                          | Usuário                            | Marcar itens como reivindicados                                       | Permitir reivindicação de itens                                     | Rafael            | Fórum de itens          | Média      |
| RF-17 | exibir tela inicial / sobre nós                             | Usuário                            | Visualizar informações                                                | Guiar o usuário no sistema                                          | Mariana           | Dashboard / Dicas       | Alta       |
| RF-18 | avisos de utilidade pública                                 | Administrador                      | Publicar alertas                                                      | Manter comunidade informada                                         | Márcio Henrique   | Dashboard               | Média      |

### Requisitos não Funcionais

|ID      | Descrição                                                                                                    |Prioridade |
|--------|--------------------------------------------------------------------------------------------------------------|-----------|
| RNF-01 | A interface deve ser responsiva (Mobile-First)                                                               | ALTA      | 
| RNF-02 | O sistema deve usar obrigatoriamente a biblioteca JS Leaflet para exibir o mapa interativo.                  | ALTA      | 
| RNF-03 | A aplicação deve carregar o mapa em menos de 3 segundos.                                                     | MÉDIA     | 
| RNF-04 | O sistema deve registrar os dados dos usuários por meio de um banco de dados MySQL.                          | ALTA      |  
| RNF-05 | O sistema deve seguir padrões de acessibilidade (WCAG 2.1).                                                  | ALTA      | 
| RNF-06 | O sistema deve utilizar o framework CSS Tailwind para padronização da interface                              | ALTA      | 

