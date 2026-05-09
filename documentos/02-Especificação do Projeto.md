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
| ID    | Descrição do Requisito                                   | Eu como...                      | Quero / Desejo / Preciso                                                                 | Para                                                                 | Responsável        | Página                     | Prioridade |
|-------|----------------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------|----------------------------|------------|
| RF-01 | permitir o cadastro de usuários com distinção de perfis | Administrador ou Novo Usuário    | Realizar o cadastro na plataforma com a definição de um perfil específico                | Que o sistema restrinja ou libere funcionalidades de acordo com as minhas permissões | Marlon           | Cadastro                   | Alta       |
| RF-02 | permitir o login de usuários com distinção de perfis.                     | Representante de uma Cooperativa | Realizar um cadastro exclusivo fornecendo dados institucionais e geográficos            | Que a plataforma direcione ferramentas específicas de gestão de coletas e análise de dados | Rafael           | Login                   | Alta       |
| RF-03 | exibir um mapa interativo                               | Usuário                          | Visualizar um mapa interativo com pontos de coleta recicláveis                            | Que eu consiga me organizar e descartar corretamente meus resíduos   | Bernardo           | Dashboard                  | Baixa      |
| RF-04 | permitir anexar fotos na solicitação de coleta          | Usuário                          | Anexar fotos do material no momento do pedido                                             | Que a cooperativa identifique corretamente tipo e volume dos resíduos | Tainara            | Pedidos                    | Média      |
| RF-06 | permitir filtro por tipo de material                   | Usuário                          | Filtrar pontos de coleta por tipo de material                                             | Encontrar rapidamente o local adequado para destinar meu resíduo      | Tainara            | Pedidos                    | Alta       |
| RF-07 | permitir solicitações de coleta para cooperativa       | Usuário                          | Solicitar coleta informando tipo, quantidade, localização e horário                      | Garantir que meus resíduos sejam encaminhados corretamente            | Tainara            | Pedidos                    | Alta       |
| RF-08 | permitir cancelamento de solicitação                   | Usuário                          | Cancelar uma solicitação de coleta                                                        | Evitar erros e remover pedidos desnecessários                         | Marlon             | Pedidos                    | Alta       |
| RF-09 | notificar usuário D-1 via PUSH                          | Usuário                          | Receber notificações PUSH com previsão de atendimento                                     | Acompanhar proximidade da coleta e me organizar                       | Marlon             | Pedidos                    | Baixa      |
| RF-10 | permitir ao usuário ter uma interface de configurações sobre sua conta.                  | Usuário                          |  Acessar uma Interface para acompanhar o status e informações da minha conta                                                   | ver meus dados e poder edita-los ou atualiza-los                                       | Bernardo             | Pedidos                    | Média      |
| RF-11 | permitir postagem de itens para doação                 | Usuário                          | Postar itens para visualização de outros usuários                                         | Permitir que usuários interessados visualizem e solicitem o item      | Arthur             | Fórum de post de itens      | Baixa      |
| RF-12 | permitir cooperativas aceitarem solicitações           | Cooperativa                      | Aceitar solicitações de coleta                                                            | Confirmar coleta e notificar o usuário                                 | Arthur             | Dashboard                  | Alta       |
| RF-13 | permitir avaliação de cooperativas                    | Usuário                          | Avaliar coleta com nota e comentário                                                      | Garantir qualidade e confiabilidade                                   | Mariana            | Dashboard                  | Média      |
| RF-14 | visualizar histórico e impacto ambiental               | Usuário                          | Acessar histórico e métricas de resíduos                                                  | Acompanhar contribuição ambiental                                     | Márcio            | Histórico                  | Alto      |
| RF-15 | cadastro de pontos de descarte                         | Representante de Ponto de Descarte | Realizar cadastro dos dados institucionais e geográficos                                  | Permitir visualização de pontos próximos                               | Arthur             | Cadastro                   | Alta       |
| RF-16 | reivindicação de itens para doação                     | Usuário                          | Raalizar marcação dos itens como reivindicado                                              | Permitir que usuários reivindiquem itens                               | Rafael             | Fórum de post de itens      | Baixa      |
| RF-17 | exibir tela inicial/sobre nós                          | Usuário                          | Visualizar                                              | Informar o usuário e Guia-lo no sistema                                     | Mariana    | Dashboard / Dicas          | Alta      |
| RF-18 | avisos de utilidade pública                            | Administrador                   | Publicar alertas sobre mudanças                                                           | Manter comunidade informada em tempo real                              | Márcio Henrique    | Dashboar                   | Baixa      |

### Requisitos não Funcionais

|ID      | Descrição                                                                                                    |Prioridade |
|--------|--------------------------------------------------------------------------------------------------------------|-----------|
| RNF-01 | A interface deve ser responsiva (Mobile-First)                                                               | ALTA      | 
| RNF-02 | O sistema deve usar obrigatoriamente a biblioteca JS Leaflet para exibir o mapa interativo.                  | ALTA      | 
| RNF-03 | A aplicação deve carregar o mapa em menos de 3 segundos.                                                     | MÉDIA     | 
| RNF-04 | O sistema deve registrar os dados dos usuários por meio de um banco de dados MySQL.                          | ALTA      |  
| RNF-05 | O sistema deve seguir padrões de acessibilidade (WCAG 2.1).                                                  | ALTA      | 
| RNF-06 | O sistema deve utilizar o framework CSS Tailwind para padronização da interface                              | ALTA      | 

