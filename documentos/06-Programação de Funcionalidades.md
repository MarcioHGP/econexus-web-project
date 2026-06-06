# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

[Utilize a estrutura abaixo para cada funcionalidade entregue na etapa]

## RF-01

### Cadastro de Usuários com Distinção de Perfis

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-01:** Permitir o cadastro de usuários com distinção de perfis.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Marlon

---

## RF-02

### Login de Usuários com Distinção de Perfis

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-02:** Permitir o login de usuários com distinção de perfis.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Rafael

---

## RF-03

### Mapa Interativo de Pontos Recicláveis

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-03:** Exibir um mapa interativo.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Bernardo

---

## RF-04

### Anexar Fotos na Solicitação de Coleta

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-04:** Permitir anexar fotos na solicitação de coleta.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Tainara

---

## RF-05

### [Requisito não informado]

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-05:** [Descrição não fornecida].

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

[Não informado]

---

## RF-06

### Filtro por Tipo de Material

<img width="1805" height="827" alt="RF06" src="https://github.com/user-attachments/assets/246a0b32-f7d8-483a-833c-35146de95775" />

#### Requisito atendido

**RF-06:** Permitir filtro por tipo de material.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

1. Acessar o sistema por meio de login com perfil de usuário (cidadão).
2. Navegar até a página “Pontos de Coleta”.
3. Visualizar a listagem completa dos pontos de coleta cadastrados.
4. Utilizar o filtro disponível para refinar a busca, por exemplo, selecionando o bairro desejado.
5. Identificar, nos cartões exibidos, os pontos que aceitam o tipo de material desejado.
6. Selecionar a opção “Ver detalhes expandidos” para obter informações adicionais sobre o ponto de coleta, incluindo endereço completo, horários de funcionamento e acesso à rota via Google Maps.


#### Responsável

Tainara

---

## RF-07

### Solicitação de Coleta para Cooperativa

<img width="1732" height="911" alt="RF07" src="https://github.com/user-attachments/assets/055b6a56-eb05-4d06-a259-47f0b9b7f8e6" />

#### Requisito atendido

**RF-07:** Permitir solicitações de coleta para cooperativa.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

1. Acessar o sistema por meio de login com perfil de usuário (cidadão).
2. Navegar até a página “Pedidos”.
3. Selecionar a opção “Solicitação de coleta”.
4. Preencher corretamente os campos obrigatórios do formulário, incluindo:
   4.1. Tipo de resíduo;
   4.2. Seleção da cooperativa compatível com os materiais informados;
   4.3. Faixa de peso estimada;
   4.4. Data e horário desejados para a coleta;
   4.5. Informações adicionais (quando necessário).
5. Conferir os dados informados e clicar no botão “Enviar pedido”.
6. Aguardar a confirmação da solicitação e acompanhar o status diretamente pelo sistema.
7. Caso necessário, realizar o cancelamento da solicitação, desde que ainda esteja dentro das condições permitidas (antes da coleta ser aceita pela cooperativa).

#### Responsável

Tainara

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

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-09:** Notificar usuário D-1 via PUSH.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Marlon

---

## RF-10

### Configurações da Conta

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-10:** Permitir interface de configurações da conta.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Bernardo

---

## RF-11

### Postagem de Itens para Doação

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-11:** Permitir postagem de itens para doação.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Arthur

---

## RF-12

### Aceitação de Solicitações por Cooperativas

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-12:** Permitir cooperativas aceitarem solicitações.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Arthur

---

## RF-13

### Avaliação de Cooperativas

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-13:** Permitir avaliação de cooperativas.

#### Artefatos da funcionalidade

| Arquivo/Artefato                      | Descrição                               |
| ------------------------------------- | --------------------------------------- |
| Componente HTML de Avaliação          | Interface para envio de avaliações      |
| Campo "Nota"                          | Seleção de avaliação de 1 a 5 estrelas  |
| Campo "Comentário"                    | Registro da opinião do usuário          |
| Botão "Enviar Avaliação"              | Acionamento do processo de envio        |
| Função JavaScript `enviarAvaliacao()` | Validação e processamento da avaliação  |
| Mensagem de confirmação               | Feedback visual após envio da avaliação |



#### Estrutura de Dados

| Campo       | Tipo       | Descrição                   |
| ----------- | ---------- | --------------------------- |
| nota        | inteiro    | Avaliação de 1 a 5 estrelas |
| comentario  | texto      | Comentário do usuário       |
| cooperativa | referência | Cooperativa avaliada        |



#### Instruções de acesso

1.	Acessar a página de detalhes da cooperativa. 
2.	Localizar a seção "Avaliação da Cooperativa". 
3.	Selecionar uma nota de 1 a 5 estrelas. 
4.	Inserir um comentário. 
5.	Clicar em "Enviar Avaliação". 


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

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-15:** Cadastro de pontos de descarte.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Arthur

---

## RF-16

### Reivindicação de Itens para Doação

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-16:** Reivindicação de itens para doação.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Rafael

---

## RF-17

### Tela Inicial e Sobre Nós

<img width="1899" height="901" alt="image" src="https://github.com/user-attachments/assets/dd591912-e6af-45c3-b8d2-7d72c0648695" />

#### Requisito atendido

**RF-17:** Exibir tela inicial e sobre nós.

#### Artefatos da funcionalidade

| Arquivo/Artefato                       | Descrição                                                                        |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| `copy.html`                            | Estrutura principal da página inicial                                            |
| Seção "Sobre Nós"                      | Conteúdo institucional da plataforma EcoNexus                                    |
| Cards "Desafio", "Solução" e "Impacto" | Componentes visuais de apresentação da proposta do projeto                       |
| CSS Bootstrap 5                        | Framework utilizado para responsividade e layout                                 |
| Estilos personalizados                 | Ajustes de cores, tipografia e espaçamento conforme identidade visual do projeto |


#### Estrutura de Dados

Não se aplica. A funcionalidade possui caráter informativo e não realiza armazenamento de dados.

#### Instruções de acesso

1.	Acessar a aplicação. 
2.	Selecionar a opção "Home" no menu principal. 
3.	Visualizar a seção institucional "Sobre Nós", contendo: 
o	Apresentação da EcoNexus; 
o	Desafio; 
o	Solução; 
o	Impacto. 

#### Responsável

Mariana Guimarães Melo

---

## RF-18

### Avisos de Utilidade Pública

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido

**RF-18:** Avisos de utilidade pública.

#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]

#### Responsável

Márcio Henrique


