# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

## RF-01

### Cadastro de Usuários com Distinção de Perfis

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/eddee7ca-e64e-489f-a588-55ffad039b99" />

#### Requisito atendido

**RF-01:** Permitir o cadastro de usuários com distinção de perfis.

#### Artefatos da funcionalidade

login.html
cadastro.html

#### Estrutura de Dados

Lista de usuários armazenada no `localStorage` sob a chave `usuarios`.

| Campo       | Tipo   | Descrição                                         |
| :---------- | :----- | :------------------------------------------------ |
| `tipo`      | texto  | Define o perfil do usuário: `cidadao` ou `cooperativa` |
| `nome`      | texto  | Nome completo (cidadão) ou Razão Social (cooperativa) |
| `documento` | texto  | CPF (cidadão) ou CNPJ (cooperativa)     |
| `email`     | texto  | E-mail único de acesso à conta          |
| `cep`       | texto  | CEP do endereço do usuário              |
| `bairro`    | texto  | Bairro do endereço do usuário           |
| `rua`       | texto  | Logradouro principal do endereço        |
| `numero`    | texto  | Número do endereço de residência ou sede|
| `senha`     | texto  | Credencial de autenticação              |

#### Instruções de acesso

1. Acesse o arquivo `cadastro.html` pelo navegador.
2. No topo do formulário, selecione o seu perfil clicando em "Cidadão" ou "Cooperativa".
3. Preencha todos os campos obrigatórios (Nome/Razão Social, CPF/CNPJ, E-mail, CEP, Bairro, Rua, Nº e Senha).
4. Clique no botão "Finalizar Cadastro". 
5. Em caso de sucesso, o sistema exibirá uma mensagem de confirmação e redirecionará automaticamente para a tela de login.

#### Responsável

Marlon

---

## RF-02

### Login de Usuários com Distinção de Perfis

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/07147766-4c6c-4d21-a144-01018624cffd" />

#### Requisito atendido

**RF-02:** Permitir o login de usuários com distinção de perfis.

#### Artefatos da funcionalidade

cadastro.html
login.html

#### Estrutura de Dados

A validação é feita consultando o array de objetos `usuarios` armazenado no `localStorage`. Se o login for bem-sucedido, o perfil autenticado é salvo temporariamente na sessão.

#### Instruções de acesso

1. Acessar a página de login da plataforma.
2. Inserir o e-mail e a senha criados previamente no cadastro.
3. Clicar no botão para efetuar a entrada no sistema. O redirecionamento ocorrerá para o respectivo dashboard com base no tipo de conta (Cidadão ou Cooperativa).

#### Responsável

Rafael

---

## RF-03

### Mapa Interativo de Pontos Recicláveis

<img width="1904" height="1077" alt="image" src="https://github.com/user-attachments/assets/8b8374cd-023d-49e0-8c3a-4d3244f7d9ee" />

#### Requisito atendido

**RF-03:** Exibir um mapa interativo.

#### Artefatos da funcionalidade

dashboard_cidadao.html
dashboard_cooperativa.html

#### Estrutura de Dados

Os dados dos marcadores combinam o array estático `pontosColeta` com registros de pontos adicionais salvos em `pontosExtras` no `localStorage`.

| Campo       | Tipo   | Descrição                                             |
| :---------- | :----- | :---------------------------------------------------- |
| `id`        | num    | Identificador único do ponto                |
| `bairro`    | texto  | Região onde o ponto está localizado         |
| `endereco`  | texto  | Logradouro completo do ponto                |
| `materiais` | array  | Lista de resíduos aceitos (ex: Papel, Vidro)|
| `horario`   | texto  | Período de funcionamento do ponto de coleta |
| `coords`    | array  | Coordenadas geográficas [latitude, longitude] utilizadas pelo Leaflet|

#### Instruções de acesso

1. Realizar o login na plataforma e acessar o Dashboard principal.
2. Localizar o painel "Mapa de Coleta" na parte superior da tela.
3. Interagir com o mapa dinâmico para localizar visualmente os pontos cadastrados.
4. (Opcional) Utilizar os filtros laterais de "Bairro" ou "Tipo de Material" para refinar os marcadores exibidos em tempo real.
5. Clicar sobre um marcador específico no mapa para abrir o pop-up com os detalhes, como endereço completo e materiais aceitos.

#### Responsável

Bernardo

---

## RF-04

### Anexar Fotos na Solicitação de Coleta

<img width="1918" height="1091" alt="image" src="https://github.com/user-attachments/assets/054ff37d-ae06-41e6-a1b4-70272ec4d47b" />

#### Requisito atendido

**RF-04:** Permitir anexar fotos na solicitação de coleta.

#### Artefatos da funcionalidade

forum.html

#### Estrutura de Dados

O arquivo de imagem manipulado por meio de um `FormData` contendo o binário, ou salvo e processado em formato de string `Base64` no banco de dados/localStorage (associado ao `id` da solicitação).

#### Instruções de acesso

1. Acessar a plataforma com seu perfil e navegar até a tela do fórum ou abertura de solicitação.
2. Iniciar o preenchimento de um novo pedido de coleta ou postagem.
3. Clicar no botão ou área de upload para inserir a foto correspondente aos materiais.
4. Selecionar a imagem desejada no seu dispositivo e confirmar o envio juntamente com os demais dados do formulário.

#### Responsável

Tainara Lorraine Carvalho

---

## RF-05

### Funcionalidade Não Especificada

<p><i>Imagem da funcionalidade não fornecida.</i></p>

#### Requisito atendido

**RF-05:** Não aplicável / Descrição não fornecida.

#### Artefatos da funcionalidade

Não aplicável.

#### Estrutura de Dados

Não aplicável.

#### Instruções de acesso

Não aplicável.

#### Responsável

Não informado

---

## RF-06

### Filtro por Tipo de Material

<img width="1805" height="827" alt="RF06" src="https://github.com/user-attachments/assets/246a0b32-f7d8-483a-833c-35146de95775" />

#### Requisito atendido

**RF-06:** Permitir filtro por tipo de material.

#### Artefatos da funcionalidade

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2026-1-e1-proj-web-t10-econexus-2/blob/main/codigo-fonte/src/pontos.html

#### Estrutura de Dados

Não Aplicável

#### Instruções de acesso

1. Acessar o sistema por meio de login com perfil de usuário (cidadão).
2. Navegar até a página “Pontos”.
3. Visualizar a listagem completa dos pontos de coleta cadastrados.
4. Utilizar o filtro disponível para refinar a busca, por exemplo, selecionando o bairro desejado.
5. Identificar, nos cartões exibidos, os pontos que aceitam o tipo de material desejado.
6. Selecionar a opção “Ver detalhes expandidos” para obter informações adicionais sobre o ponto de coleta, incluindo endereço completo, horários de funcionamento e acesso à rota via Google Maps.


#### Responsável

Tainara Lorraine Carvalho

---

## RF-07

### Solicitação de Coleta para Cooperativa

<img width="1732" height="911" alt="RF07" src="https://github.com/user-attachments/assets/055b6a56-eb05-4d06-a259-47f0b9b7f8e6" />

#### Requisito atendido

**RF-07:** Permitir solicitações de coleta para cooperativa.

#### Artefatos da funcionalidade

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2026-1-e1-proj-web-t10-econexus-2/blob/main/codigo-fonte/src/dashboard_cidadao.html

#### Estrutura de Dados

Não Aplicável

#### Instruções de acesso

1. Acessar o sistema por meio de login com perfil de usuário (cidadão).
2. Navegar até a página “Dashboard Cidadão”.
3. Localize a opção “Solicitar Coleta”.
4. Preencher corretamente os campos obrigatórios do formulário, incluindo:
   4.1. Seleção da cooperativa disponível;
   4.2. Seleção dos tipos de materiais a serem coletados;
   4.3. Data desejada para a coleta;
   4.4. Endereço da Coleta;
   4.5. Observações adicionais (quando necessário).
6. Conferir os dados informados
7. Clicar no botão “Confirmar pedido”.
8. Aguardar a confirmação da solicitação e acompanhar o status diretamente pela opção (Ver meus pedidos).

#### Responsável

Tainara Lorraine Carvalho

---

## RF-08

### Cancelamento de Solicitação

<img width="1902" height="865" alt="image" src="https://github.com/user-attachments/assets/322d7ce7-87db-4908-931c-621741462782" />

#### Requisito atendido

**RF-08:** Permitir cancelamento de solicitação.

#### Artefatos da funcionalidade

historico e cancelamento de pedido.html

#### Estrutura de Dados

| Campo    | Tipo    | Descrição                                                    |
| :------- | :------ | :----------------------------------------------------------- |
| `id`     | inteiro | Identificador único da solicitação de coleta                 |
| `residuo`| texto   | Tipo de material reciclável descartado                       |
| `data`   | texto   | Data de abertura da solicitação                              |
| `status` | texto   | Estado atual do pedido (muda para 'Cancelado')               |
| `pontos` | inteiro | Pontuação ecológica gerada pelo descarte                     |

#### Instruções de acesso

1. Navegue até a raiz do projeto e execute o arquivo historico.html no navegador.
2. Na tabela de "Meu Histórico de Solicitações", identifique as coletas que apresentam a tag de status na cor amarela como "Pendente".
3. Clique no botão "Cancelar" localizado na última coluna da linha correspondente ao pedido desejado.
4. Confirme a ação na caixa de diálogo (confirm) que aparecerá no navegador. O sistema atualizará o status para "Cancelado" instantaneamente e desabilitará o botão.

#### Responsável

Márcio

---

## RF-09

### Notificações PUSH de Coleta

<img width="1918" height="1088" alt="image" src="https://github.com/user-attachments/assets/d22b829e-7773-4ac5-a1c9-f6b4b8b0ae66" />

#### Requisito atendido

**RF-09:** Notificar usuário D-1 via PUSH.

#### Artefatos da funcionalidade

configuracoes.html

#### Estrutura de Dados

As permissões de notificações dependem da API nativa do navegador (`Notification API`). O estado visual da chave seletora pode ser integrado à chave de preferências do `localStorage` vinculada ao usuário.

#### Instruções de acesso

1. Acesse o menu de navegação e clique em "Configurações".
2. Clique no painel "Notificações".
3. Localize as chaves seletoras para "Alertas de Coleta Próxima" ou "Novidades da Comunidade" e clique para ativá-las.
4. Conceda a permissão no pop-up do navegador (se solicitado) para começar a receber as notificações push em seu sistema.

#### Responsável

Marlon

---

## RF-10

### Configurações da Conta

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/76ce89cc-67f1-48f2-a08c-0163cdba167d" />

#### Requisito atendido

**RF-10:** Permitir interface de configurações da conta.

#### Artefatos da funcionalidade

configuracoes.html

#### Estrutura de Dados

Dados extraídos e atualizados a partir do objeto principal `usuarioLogado` no `localStorage`.

| Campo     | Tipo   | Descrição                                                              |
| :-------- | :----- | :--------------------------------------------------------------------- |
| `tipo`    | texto  | Exibido em Informações Pessoais                              |
| `nome`    | texto  | Exibido em Informações Pessoais                              |
| `rua`     | texto  | Alterado e atualizado na seção "Editar Endereço"             |
| `numero`  | texto  | Alterado e atualizado na seção "Editar Endereço"             |
| `bairro`  | texto  | Alterado e atualizado na seção "Editar Endereço"             |

#### Instruções de acesso

1. Acesse a plataforma e abra o menu principal clicando no ícone do hambúrguer no topo da tela.
2. Clique na rota "Configurações".
3. Na tela de configurações, selecione "Informações Pessoais" para visualizar os dados de perfil vinculados.
4. Selecione "Meu Endereço" para visualizar as informações de localização. Caso queira modificar, clique no botão "Editar", altere os dados e confirme clicando em "Salvar Alterações".
5. Para deslogar da plataforma, selecione a opção "Sair da Conta".

#### Responsável

Bernardo

---

## RF-11

### Postagem de Itens para Doação

<img width="1918" height="1087" alt="image" src="https://github.com/user-attachments/assets/e8f6d5a3-4134-489e-aec1-a12ecb000386" />

#### Requisito atendido

**RF-11:** Permitir postagem de itens para doação.

#### Artefatos da funcionalidade

forum.html

#### Estrutura de Dados

Os itens postados são processados e consolidados em um Array no `localStorage` para exibição no fórum e acompanhamento, contendo detalhes como ID, nome do item, descrição, categoria, imagem e status da doação.

#### Instruções de acesso

1. Navegue até a tela "Fórum de Doações".
2. Acione o botão de iniciar uma nova postagem.
3. Preencha os detalhes do item que deseja disponibilizar para doação, incluindo descrição, categoria e imagens anexadas.
4. Clique em Publicar/Salvar para que o item fique visível para a comunidade.

#### Responsável

Arthur

---

## RF-12

### Aceitação de Solicitações por Cooperativas

<img width="1898" height="1087" alt="image" src="https://github.com/user-attachments/assets/e679a1be-f0e2-4c60-8390-2f132adbc163" />

#### Requisito atendido

**RF-12:** Permitir cooperativas aceitarem solicitações.

#### Artefatos da funcionalidade

dashboard_cooperativa.html

#### Estrutura de Dados

Modificação do campo `status` dentro do registro da solicitação na base local (array de `pedidosColeta`), alterando de estado "Pendente" para "Confirmado" / "Aceito".

#### Instruções de acesso

1. Realizar login no sistema utilizando uma conta de perfil "Cooperativa".
2. Acessar a tela "Dashboard" ou a seção designada a listar todos os pedidos em aberto.
3. Localizar o card de solicitação desejado e revisar os detalhes (materiais, volume, endereço).
4. Clicar no botão para "Aceitar" a solicitação correspondente e atualizar o fluxo do pedido.

#### Responsável

Arthur

---

## RF-13

### Avaliação de Cooperativas

<img width="1395" height="544" alt="image" src="https://github.com/user-attachments/assets/5ed19cff-5efb-4236-81f0-5af6bdf36efd" />

#### Requisito atendido

**RF-13:** Permitir avaliação de cooperativas.

#### Artefatos da funcionalidade
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2026-1-e1-proj-web-t10-econexus-2/blob/main/codigo-fonte/src/dashboard_cooperativa.html

#### Estrutura de Dados

| Campo       | Tipo       | Descrição                   |
| ----------- | ---------- | --------------------------- |
| nota        | inteiro    | Avaliação de 1 a 5 estrelas |
| comentario  | texto      | Comentário do usuário       |
| cooperativa | referência | Cooperativa avaliada        |

#### Instruções de acesso

1. Acessar a página de detalhes da cooperativa. 
2. Localizar a seção "Avaliação da Cooperativa". 
3. Selecionar uma nota de 1 a 5 estrelas. 
4. Inserir um comentário. 
5. Clicar em "Enviar Avaliação". 

#### Responsável

Mariana Guimarães Melo

---

## RF-14

### Histórico e Impacto Ambiental

<img width="1899" height="870" alt="Captura de tela 2026-06-05 193151" src="https://github.com/user-attachments/assets/285ce530-6c22-4122-8077-cf2ebdc3cb53" />

#### Requisito atendido

**RF-14:** Permitir a visualização do histórico de pedidos e o cálculo do impacto ambiental gerado.

#### Artefatos da funcionalidade

historico e cancelamento de pedido

#### Estrutura de Dados

| Campo    | Tipo    | Descrição                                                    |
| :------- | :------ | :----------------------------------------------------------- |
| `id`     | inteiro | Identificador único do registro para listagem                |
| `residuo`| texto   | Tipo de material reciclável descartado                       |
| `data`   | texto   | Registro cronológico da solicitação                          |
| `status` | texto   | Estado atual para controle e exibição de tags                |
| `pontos` | inteiro | Valor utilizado no cálculo do impacto ambiental acumulado    |

#### Instruções de acesso

1. Abra o arquivo historico e cancelamento de pedido.html no navegador de sua preferência.
2. A tela carregará automaticamente todas as solicitações registradas no localStorage do usuário.
3. Cada linha da tabela exibirá o ID do pedido, o tipo de resíduo descartado, a data da coleta, o status atual e os pontos ecológicos computados para aquela transação.

#### Responsável

Márcio

---

## RF-15

### Cadastro de Pontos de Descarte

<img width="1900" height="1088" alt="image" src="https://github.com/user-attachments/assets/0a854e56-80f9-46cd-8fc4-a2d8eeaffc8b" />

#### Requisito atendido

**RF-15:** Cadastro de pontos de descarte.

#### Artefatos da funcionalidade

dashboard_cooperativa.html

#### Estrutura de Dados

Os pontos extras são gravados em um array no `localStorage` sob a chave `pontosExtras`.

| Campo       | Tipo   | Descrição                                               |
| :---------- | :----- | :------------------------------------------------------ |
| `id`        | inteiro| Identificador (geralmente gerado a partir de valores >= 1000) |
| `bairro`    | texto  | Bairro do novo ecoponto                       |
| `endereco`  | texto  | Endereço da localidade                        |
| `horario`   | texto  | Regras de funcionamento cadastradas           |
| `materiais` | array  | Lista de materiais suportados por este ponto  |
| `coords`    | array  | Informação de geolocalização [lat, lng]       |

#### Instruções de acesso

1. Fazer o acesso no sistema com perfil do tipo "Cooperativa" e acessar o Dashboard principal.
2. Acessar a funcionalidade de adição de novos pontos de coleta.
3. Preencher todos os campos de localização, seleção de materiais aceitos e horários de disponibilidade.
4. Salvar os dados para atualizar o sistema de mapas e listar a localização para os cidadãos (esses pontos novos são indicados pela tag visual "Novo" no mapa).

#### Responsável

Arthur

---

## RF-16

### Reivindicação de Itens para Doação

<img width="1918" height="1087" alt="image" src="https://github.com/user-attachments/assets/6d65b608-859b-4564-b154-84456ce987b3" />

#### Requisito atendido

**RF-16:** Reivindicação de itens para doação.

#### Artefatos da funcionalidade

forum.html

#### Estrutura de Dados

Alteração nos dados do item correspondente registrado, vinculando o ID do usuário interessado e alterando o estado do item de doação (por exemplo, de "Disponível" para "Reivindicado" ou "Aguardando Contato").

#### Instruções de acesso

1. Acessar a tela com o "Fórum de Doações".
2. Navegar pelo feed e localizar um item no qual há interesse em receber.
3. Clicar no botão "Tenho interesse" ou "Reivindicar" na postagem selecionada.
4. Concluir os passos ou entrar em contato conforme as diretrizes apresentadas na tela.

#### Responsável

Rafael

---

## RF-17

### Tela Inicial e Sobre Nós

<img width="1899" height="901" alt="image" src="https://github.com/user-attachments/assets/dd591912-e6af-45c3-b8d2-7d72c0648695" />

#### Requisito atendido

**RF-17:** Exibir tela inicial e sobre nós.

#### Artefatos da funcionalidade

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2026-1-e1-proj-web-t10-econexus-2/blob/main/codigo-fonte/src/index.html

#### Estrutura de Dados

Não se aplica. A funcionalidade possui caráter informativo e não realiza armazenamento de dados.

#### Instruções de acesso

1. Acessar a aplicação. 
2. Selecionar a opção "Home" no menu principal. 
3. Visualizar a seção institucional "Sobre Nós", contendo: 
    * Apresentação da EcoNexus; 
    * Desafio; 
    * Solução; 
    * Impacto. 

#### Responsável

Mariana Guimarães Melo

---

## RF-18

### Avisos de Utilidade Pública

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6654138d-cd1a-4b8d-aaca-55d79eaeb4b9" />

#### Requisito atendido

**RF-18:** Avisos de utilidade pública.

#### Artefatos da funcionalidade

dashboard_cidadao.html
dashboard_cooperativa.html

#### Estrutura de Dados

Os avisos comunitários são lidos da chave `avisos` em formato de Array no `localStorage`.

| Campo         | Tipo   | Descrição                                                           |
| :------------ | :----- | :------------------------------------------------------------------ |
| `titulo`      | texto  | O título informativo principal do card                    |
| `cooperativa` | texto  | O nome da cooperativa ou fonte responsável pelo aviso     |
| `descricao`   | texto  | O conteúdo descritivo da nota de utilidade pública        |
| `dataInicio`  | texto  | Data inicial estipulada para a exibição (formato AAAA-MM-DD)|
| `dataFim`     | texto  | Data final de expiração do aviso no mural (formato AAAA-MM-DD)|

#### Instruções de acesso

1. Realizar login em sua respectiva conta (Cidadão ou Cooperativa) e seguir para o painel principal (Dashboard).
2. Rolar a página até a seção denominada "Mural de Avisos da Comunidade".
3. Conferir visualmente os cards com alertas sobre interrupções, retornos de rotas de coleta ou comunicados da prefeitura válidos para a data atual.

#### Responsável

Márcio Henrique
