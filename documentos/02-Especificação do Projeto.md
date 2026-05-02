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
| ID    | Descrição do Requisito                                 | Eu como...                          | Quero / Desejo / Preciso                                                                 | Para                                                                 | Responsável       | Página                     | Prioridade || ID    | Descrição do Requisito                                 | Eu como | Anexar fotos do material no momento do pedido                                             | Que a cooperativa identifique tipo e volume dos resíduos               | Tainara           | Pedidos                    | Média      |
| RF-06 | Permitir filtro por tipo de material                   | Usuário                             | Filtrar pontos de coleta por tipo de material                                             | Encontrar rapidamente onde destinar meu resíduo                        | Tainara           | Pedidos                    | Alta       |
| RF-07 | Permitir solicitações de coleta para cooperativa       | Usuário                             | Solicitar coleta informando tipo, quantidade, localização e horário                      | Garantir destinação correta dos resíduos                               | Tainara           | Pedidos                    | Alta       |
| RF-08 | Permitir cancelamento de solicitação                   | Usuário                             | Cancelar uma solicitação de coleta                                                        | Evitar erros e remover pedidos desnecessários                           | Marlon            | Pedidos                    | Alta       |
| RF-09 | Notificar usuário D-1 via PUSH                          | Usuário                             | Receber notificações PUSH com previsão de atendimento                                     | Acompanhar proximidade da coleta                                       | Marlon            | Pedidos                    | Baixa      |
| RF-10 | Interface para acompanhar solicitações                 | Usuário                             | Acessar interface para acompanhar status                                                  | Saber em que etapa o pedido está                                       | Marlon            | Pedidos                    | Média      |
| RF-11 | Permitir postagem de itens para doação                 | Usuário                             | Postar itens para visualização de outros usuários                                         | Permitir que interessados visualizem e solicitem o item                | Arthur            | Fórum de post de itens      | Baixa      |
| RF-12 | Permitir cooperativas aceitarem solicitações           | Cooperativa                         | Aceitar solicitações de coleta                                                            | Confirmar coleta e notificar o usuário                                  | Arthur            | Dashboard                  | Alta       |
| RF-13 | Permitir avaliação de cooperativas                    | Usuário                             | Avaliar coleta com nota e comentário                                                      | Garantir qualidade e confiabilidade                                     | Mariana           | Dashboard                  | Média      |
| RF-14 | Visualizar histórico e impacto ambiental              | Usuário                             | Acessar histórico e métricas de resíduos                                                  | Acompanhar contribuição ambiental                                       | Mariana           | Histórico                  | Baixa      |
| RF-15 | Cadastro de pontos de descarte                         | Rep. de Ponto de Descarte           | Realizar cadastro com dados institucionais e geográficos                                  | Permitir visualização de pontos próximos                                 | Rafael            | Cadastro                   | Alta       |
| RF-16 | Reivindicação de itens para doação                     | Usuário                             | Marcar itens como reivindicados                                                           | Permitir que usuários reivindiquem itens                                | Rafael            | Fórum de post de itens      | Baixa      |
| RF-17 | Exibir dicas de higienização                           | Usuário                             | Visualizar instruções de preparo dos resíduos                                             | Evitar rejeição por contaminação                                         | Márcio Henrique   | Dashboard / Dicas          | Baixa      |
| RF-18 | Avisos de utilidade pública                            | Administrador                      | Publicar alertas sobre mudanças                                                           | Manter comunidade informada em tempo real                                | Márcio Henrique   | Dashboard                  | Baixa      |
|-------|--------------------------------------------------------|-------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------|-------------------|----------------------------|------------|
| RF-01 | Permitir o cadastro de usuários com distinção de perfis | Administrador ou Novo Usuário       | Realizar o cadastro na plataforma com a definição de um perfil específico                | Que o sistema restrinja ou libere funcionalidades conforme permissões | Bernardo          | Cadastro                   | Alta       |
| RF-02 | Permitir o cadastro de cooperativas                    | Representante de uma Cooperativa    | Realizar um cadastro exclusivo com dados institucionais e geográficos                    | Que a plataforma direcione ferramentas específicas de gestão          | Bernardo          | Cadastro                   | Alta       |
| RF-03 | Exibir um mapa interativo                               | Usuário                             | Visualizar um mapa interativo com pontos de coleta recicláveis                            | Me organizar e descartar corretamente meus resíduos                   | Bernardo          | Dashboard                  | Baixa      |


### Requisitos não Funcionais

|ID      | Descrição                                                                                                    |Prioridade |
|--------|--------------------------------------------------------------------------------------------------------------|-----------|
| RNF-01 | A interface deve ser responsiva (Mobile-First)                                                               | ALTA      | 
| RNF-02 | O sistema deve usar obrigatoriamente a biblioteca JS Leaflet para exibir o mapa interativo.                  | ALTA      | 
| RNF-03 | A aplicação deve carregar o mapa em menos de 3 segundos.                                                     | MÉDIA     | 
| RNF-04 | O sistema deve registrar os dados dos usuários por meio de um banco de dados MySQL.                          | ALTA      |  
| RNF-05 | O sistema deve seguir padrões de acessibilidade (WCAG 2.1).                                                  | ALTA      | 
| RNF-06 | O sistema deve utilizar o framework CSS Tailwind para padronização da interface                              | ALTA      | 

