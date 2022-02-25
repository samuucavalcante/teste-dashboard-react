# Projeto de teste
Este é apenas um projeto de teste que se aproxima do ambiente real de frontend utilizado atualmente.

## Instruções

O DEV deverá criar um `fork` deste projeto, e desenvolver em cima do seu fork. Use um documento `*.md` no repositório para informar as decisões tomadas, como você organizou e separou seu código, e principalmente as instruções de como executar seu projeto.

- O desenvolvedor está livre para modificar absolutamente quaquer coisa que julgar necessário. 
- Não é obrigatório para o teste completar todas as tarefas, pode ser feito em partes *(se quiser, é claro)*.
- É importante fazer um relárorio simples em `*.md` do que foi feito, e o tempo utilizado.

## Objetivo

Os principais objetivos deste teste é avaliar as seguintes caracteristicas:

- Nível de organização das etapas de desenvolvimento (tomada de decisões em features / ordem dos commits)
- Facilidade para a reprodução do ambiente por outros DEV's do time
- Legibilidade e padronização do código.
- Noções de responsividade
- Escalabilidade (componentização e organização da estrutura de arquivos do projeto)
- Capacidade de resolução de problemas
- Nível de intimidade com o fluxo do `React`

---
## Tarefas possíveis para o Teste 

> As tarefas estão em ordem de complexidade

### 1. Ambiente de desenvolvimento

- [ ] Configurar projeto para rodar com `typescript`
- [ ] Atualizar dependênicas que não prejudiquem o funcionamento do projeto
- [ ] Configurar, iniciar e utilizar o projeto com `git flow` (conceitos básicos)
- [ ] Reorganizar estrutura de pastas do projeto, apenas se achar necesário
- [ ] Configuração padronização de código `eslint`

--- 

### 2. Estilização
Fique à vontade para utilizar a biblioteca de estilização favorita (damos preferência para `styled-components`)
- [ ] Reproduzir um componente bootstrap SASS/SCSS do Tema por biblioteca de estilização javascript de sua escolha


### 3. Criar hooks

- [ ] Criar hook para troca de Tema da aplicação
- [ ] Requisitar um Tema para o servidor backend (utilize simulação de Promises com mocks);

---

### 4. Redux
> dica: pode utilizar a lib `@reduxjs/toolkit` para facilitar o processo

- [ ] Configurar store do `redux` para aplicação
- [ ] Salvar informações de *Tema e/ou qualquer outra informação* em um estado global do `react-redux`


### 5. Persistindo estados globais
> dica: aqui utilizamos o `redux-persist`

- [ ] Salvar informações de *Tema e/ou qualquer outra informação* no storage do navegador

---

### 6. Componentizar tabela
A tabela componentizada deve prosseguir com a aparência da tabela do próprio Tema, podendo aproveitar as classes de tabela e outros componentes do bootstrap.

#### Motivação
Serão utilizadas muitas tabelas de dados no sistema, então para: 
- Evitar código prolixo;
- Evitar códigos clichês de tabelas HTML;
- Minimizar erros;
- Facilitar a manutenção;

#### Requerimentos
- [ ] A Tabela deve receber um Tema como propriedade `themeColor` 
- [ ] A Tabela deve ser capaz de receber Células personalizáveis
- [ ] Deve ser capaz de ordenar por coluna (configurável)
- [ ] Quando configurado propriedade `fetchData`, deve ser capaz de requisitar informações do backend com paginação automática.
  - `{{url}}/paginate?page=1&pageSize=20`

---

## Importante

Sabemos que o [Argon Dashboard React](https://www.creative-tim.com/product/argon-dashboard-react) está longe de ser ideal para utilizar como template de projetos react. Porém, nosso frontend foi pensado e elaborado a partir do design desse template.
Você está livre para sugerir alterações na estrutura e nas abordagens do projeto. 
Reforçando: 
- O seu objetivo **NÃO É** fazer melhorias no template da Argon, e sim mostrar suas habilidades na resolução de problemas em ambiente real, de forma eficiênte, e principalmente, que seja compreendida pelo **time**.



