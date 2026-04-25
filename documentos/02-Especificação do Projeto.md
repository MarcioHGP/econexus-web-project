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

| ID    | Descrição do Requisito                                              | Eu como...                           | Quero/Desejo/Preciso                                                              | Para                                                                                                   | Responsável     | Página                 |
|-------|---------------------------------------------------------------------|--------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------|------------------------|
| RF-01 | permitir o cadastro de usuários com distinção de perfis             | Administrador ou Novo Usuário        | Realizar o cadastro na plataforma com a definição de um perfil específico         | Que o sistema restrinja ou libere funcionalidades de acordo com as minhas permissões                 | Bernardo        | Cadastro               |
| RF-02 | permitir o cadastro de cooperativas                                 | Representante de uma Cooperativa     | Realizar um cadastro exclusivo fornecendo dados institucionais e geográficos      | Que a plataforma direcione ferramentas específicas de gestão de coletas e análise de dados           | Bernardo        | Cadastro               |
| RF-03 | exibir um mapa interativo                                           | Usuário                              | Visualizar um mapa interativo com pontos de coleta recicláveis                    | Que eu consiga me organizar e descartar corretamente meus resíduos                                    | Bernardo        | Dashboard              |
| RF-04 | permitir anexar fotos na solicitação de coleta                      | Usuário                              | Anexar fotos do material no momento do pedido                                     | Que a cooperativa identifique corretamente tipo e volume dos resíduos                                 | Tainara         | Pedidos                |
| RF-06 | permitir filtro por tipo de material                                | Usuário                              | Filtrar pontos de coleta por tipo de material                                     | Encontrar rapidamente o local adequado para destinar meu resíduo                                      | Tainara         | Pedidos                |
| RF-07 | permitir solicitações de coleta para cooperativa                    | Usuário                              | Solicitar coleta informando tipo, quantidade, localização e horário               | Garantir que meus resíduos sejam encaminhados corretamente                                            | Tainara         | Pedidos                |
| RF-08 | permitir cancelamento de solicitação                                | Usuário                              | Cancelar uma solicitação de coleta                                                | Evitar erros e remover pedidos desnecessários                                                          | Marlon          | Pedidos                |
| RF-09 | notificar usuário D-1 via PUSH                                      | Usuário                              | Receber notificações PUSH com previsão de atendimento                             | Acompanhar proximidade da coleta e me organizar                                                        | Marlon          | Pedidos                |
| RF-10 | interface para acompanhar solicitações                              | Usuário                              | Acessar interface para acompanhar status                                         | Saber em que etapa o pedido está                                                                      | Marlon          | Pedidos                |
| RF-11 | permitir postagem de itens para doação                              | Usuário                              | Postar itens para visualização de outros usuários                                 | Permitir que usuários interessados visualizem e solicitem o item                                      | Arthur          | Fórum de post de itens |
| RF-12 | permitir cooperativas aceitarem solicitações                        | Cooperativa                          | Aceitar solicitações de coleta                                                    | Confirmar coleta e notificar o usuário                                                                | Arthur          | Dashboard              |
| RF-13 | permitir avaliação de cooperativas                                  | Usuário                              | Avaliar coleta com nota e comentário                                              | Garantir qualidade e confiabilidade                                                                   | Mariana         | Dashboard              |
| RF-14 | visualizar histórico e impacto ambiental                            | Usuário                              | Acessar histórico e métricas de resíduos                                          | Acompanhar contribuição ambiental                                                                     | Mariana         | Histórico              |
| RF-15 | cadastro de pontos de descarte                                      | Representante de Ponto de Descarte   | Realizar cadastro dos dados institucionais e geográficos                                      | Permitir visualização de pontos próximos                                                              | Rafael          | Cadastro               |
| RF-16 | reivindicação de itens para doação                                  | Usuário                              | Raalizar marcação dos itens como reivindicado                                                     | Permitir que usuários reivindiquem itens                                                              | Rafael          | Fórum de post de itens |
| RF-17 | exibir dicas de higienização                                        | Usuário                              | Visualizar instruções de preparo dos resíduos                                     | Evitar rejeição por contaminação                                                                      | Márcio Henrique | Dashboard / Dicas      |
| RF-18 | avisos de utilidade pública                                         | Administrador                        | Publicar alertas sobre mudanças                                                   | Manter comunidade informada em tempo real                                                             | Márcio Henrique | Dashboard              |

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                                                                                                       | Prioridade |
|------|-----------------------------------------------------------------------------------------------------------------|------------|
| RF-01 | Permitir o cadastro de usuários com distinção de perfis                                                        | Alta       |
| RF-02 | Permitir o cadastro de cooperativas                                                                            | Alta       |
| RF-03 | Exibir um mapa interativo                                                                                      | Alta       |
| RF-04 | Permitir o usuário anexar fotos do material na solicitação de coleta                                           | Média      |
| RF-05 | Permitir o filtro de pontos de coleta por tipo de material                                                     | Alta       |
| RF-06 | Permitir ao usuário realizar solicitações de coleta para cooperativa                                           | Alta       |
| RF-07 | Permitir ao usuário cancelar uma solicitação de coleta                                                         | Média      |
| RF-08 | Notificar o usuário via PUSH quando a solicitação estiver a D-1 de ser atendida                                | Média      |
| RF-09 | Permitir ao usuário acessar uma interface para acompanhar suas solicitações de coleta                          | Alta       |
| RF-10 | Permitir que os usuários postem itens para doação                                                              | Média      |
| RF-11 | Permitir que as cooperativas aceitem as solicitações dos usuários                                              | Alta       |
| RF-12 | Permitir que usuários avaliem o serviço prestado pelas cooperativas após a coleta                              | Média      |
| RF-13 | Permitir que o usuário visualize seu histórico de descartes e impacto ambiental                                | Média      |
| RF-14 | Permitir o cadastro de pontos de descarte com formulário específico                                            | Média      |
| RF-15 | Permitir a reivindicação de itens postados para doação                                                         | Média      |
| RF-16 | Permitir que itens doados sejam marcados como reivindicados                                                    | Baixa      |

### Requisitos não Funcionais

|ID      | Descrição                                                                                                    |Prioridade |
|--------|--------------------------------------------------------------------------------------------------------------|-----------|
| RNF-01 | A interface deve ser responsiva (Mobile-First)                                                               | ALTA      | 
| RNF-02 | O sistema deve usar obrigatoriamente a biblioteca JS Leaflet para exibir o mapa interativo.                  | ALTA      | 
| RNF-03 | A aplicação deve carregar o mapa em menos de 3 segundos.                                                     | MÉDIA     | 
| RNF-04 | O sistema deve registrar os dados dos usuários por meio de um banco de dados MySQL.                          | ALTA      |  
| RNF-05 | O sistema deve seguir padrões de acessibilidade (WCAG 2.1).                                                  | ALTA      | 
| RNF-06 | O sistema deve utilizar o framework CSS Tailwind para padronização da interface                              | ALTA      | 

