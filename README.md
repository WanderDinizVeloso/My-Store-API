# My-Store-API
<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=119CE1&style=for-the-badge&logo="/> <img src="https://img.shields.io/static/v1?label=PR&message=YES&color=4DC31A&style=for-the-badge&logo="/>

Projeto criado visando colocar em prática os conhecimentos adquiridos em Back-end, onde crio uma API para cadastro/leitura de produtos/vendas composta de:

 - :white_check_mark: Usuários:
    - [x] Criação;
    - [x] Remoçao;
    - [x] Atualização;
    - [x] Leitura por Id;
    - [x] Leitura de todos os usuários cadastrados.

 - :white_check_mark: Cadastro de produtos: 
    - [x] Criação;
    - [x] Remoçao;
    - [x] Atualização;
    - [x] Leitura por Id;
    - [x] Leitura de todos os produtos cadastrados.

 - :white_check_mark: Cadastro de vendas:
    - [x] Criação;
    - [x] Remoçao;
    - [x] Atualização;
    - [x] Leitura por Id;
    - [x] Leitura de todas as vendas cadastradas.

 - :white_check_mark: Leitura de todos os erros internos possivelmente encontrados na execução da API;

---

# Sumário

- [Status](#status)
- [Licença](#licença)
- [Habilidades desenvolvidas](#habilidades-desenvolvidas)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Organização e Estruturação do Projeto](#organização-e-estruturação-do-projeto)
- [Pré-requisitos](#pré-requisitos)
  - [Ferramentas necessárias](#ferramentas-necessárias)
  - [Rodando no servidor local](#rodando-no-servidor-local)
  - [Quer contribuir com o projeto?](#quer-contribuir-com-o-projeto)
- [Orientações detalhadas de como utilizar](#orientações-detalhadas-de-como-utilizar)
  - [Users](#users)
    - [Users create](#users-create)
    - [Users remove](#users-remove)
    - [Users searchAll](#users-searchall)
    - [Users searchById](#users-searchbyid)
    - [Users update](#users-update)
  - [Login](#login)
  - [Products](#products)
    - [Products create](#products-create)
    - [Products remove](#products-remove)
    - [Products searchAll](#products-searchall)
    - [Products searchById](#products-searchbyid)
    - [Products update](#products-update)
  - [Sales](#sales)
    - [Sales create](#sales-create)
    - [Sales remove](#sales-remove)
    - [Sales searchAll](#sales-searchall)
    - [Sales searchById](#sales-searchbyid)
    - [Sales update](#sales-update)
  - [Error](#error)
    - [Error searchAll](#error-searchall)
- [Contribuição](#contribuição)
- [Agradecimentos](#agradecimentos)
- [Autor](#autor)

---

# Status

Este projeto está em constante construção, pois a cada conhecimento adquirido e novas tecnologias aprendidas, as implementarei visando melhorar sua perfornance e escalabilidade.

---

# Licença

Este projeto esta sobe a licença [MIT](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT).

---

# Habilidades desenvolvidas

- Entender os conceitos básicos de como o JavaScript funciona;
- Realizar operações assíncronas utilizando async/await;
- Realizar chamadas de funções de forma consciente;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares;
- Entender o funcionamento das camadas Model, Service, Controller;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada camada;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Entender e aplicar os padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis;
- Autenticar rotas do Express, usando o token JWT;
- Gerar tokens a partir de informações como login e senha;
- Entender como utilizar o bcrypt para criptografar senhas de usuários;
- Entender e aplicar os conceitos de markdown na criação de um README estruturado.

---

# Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [nodemon](https://nodemon.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [eslint-config-trybe-backend](https://www.npmjs.com/package/eslint-config-trybe-backend)
- [http-status-codes](https://www.npmjs.com/package/http-status-codes)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongodb](https://www.npmjs.com/package/mongodb)

---

# Organização e Estruturação do Projeto

O projeto está organizado e estruturado da seguinte maneira:
```bash
├── .example.env
├── .env
├── README.md
└── src
    ├── api
    │   ├── app.js
    │   └── server.js
    ├── controller
    │   ├── documents
    │   │   ├── error
    │   │   │   ├── index.js
    │   │   │   └── searchAll.js
    │   │   ├── login
    │   │   │   ├── index.js
    │   │   │   └── login.js
    │   │   ├── products
    │   │   │   ├── create.js
    │   │   │   ├── index.js
    │   │   │   ├── remove.js
    │   │   │   ├── searchAll.js
    │   │   │   ├── searchById.js
    │   │   │   └── update.js
    │   │   ├── sales
    │   │   │   ├── create.js
    │   │   │   ├── index.js
    │   │   │   ├── remove.js
    │   │   │   ├── searchAll.js
    │   │   │   ├── searchById.js
    │   │   │   └── update.js
    │   │   └── users
    │   │       ├── create.js
    │   │       ├── index.js
    │   │       ├── remove.js
    │   │       ├── searchAll.js
    │   │       ├── searchById.js
    │   │       └── update.js
    │   ├── middlewares
    │   │   ├── auth
    │   │   │   ├── admAuthorization.js
    │   │   │   ├── authentication.js
    │   │   │   └── userAuthorization.js
    │   │   ├── error
    │   │   │   └── index.js
    │   │   ├── index.js
    │   │   ├── validations
    │   │   │   ├── validateEmail.js
    │   │   │   ├── validateFirstName.js
    │   │   │   ├── validateId.js
    │   │   │   ├── validateLastName.js
    │   │   │   ├── validatePassword.js
    │   │   │   ├── validateProductCategory.js
    │   │   │   ├── validateProductName.js
    │   │   │   ├── validateProductPrice.js
    │   │   │   ├── validateProductQuantity.js
    │   │   │   ├── validateProductUnity.js
    │   │   │   └── validateSale.js
    │   │   └── wrapper
    │   │       └── index.js
    │   ├── routers
    │   │   ├── error.js
    │   │   ├── login.js
    │   │   ├── products.js
    │   │   ├── root.js
    │   │   ├── sales.js
    │   │   └── users.js
    │   └── statusAndMessage
    │       └── index.js
    ├── model
    │   ├── connection.js
    │   ├── documents
    │   │   ├── create.js
    │   │   ├── remove.js
    │   │   ├── searchAll.js
    │   │   ├── searchById.js
    │   │   └── update.js
    │   └── index.js
    └── service
        ├── auth
        │   ├── getToken.js
        │   ├── index.js
        │   └── verifyToken.js
        ├── documents
        │   ├── error
        │   │   ├── create.js
        │   │   ├── index.js
        │   │   └── searchAll.js
        │   ├── login
        │   │   ├── index.js
        │   │   └── login.js
        │   ├── products
        │   │   ├── create.js
        │   │   ├── index.js
        │   │   ├── remove.js
        │   │   ├── searchAll.js
        │   │   ├── searchById.js
        │   │   └── update.js
        │   ├── sales
        │   │   ├── create.js
        │   │   ├── index.js
        │   │   ├── remove.js
        │   │   ├── searchAll.js
        │   │   ├── searchById.js
        │   │   └── update.js
        │   └── users
        │       ├── admCreate.js
        │       ├── create.js
        │       ├── index.js
        │       ├── remove.js
        │       ├── searchAll.js
        │       ├── searchById.js
        │       └── update.js
        ├── functions
        │   ├── findEmail.js
        │   ├── findProductName.js
        │   ├── includeTotalAndAmountOnSale.js
        │   ├── index.js
        │   ├── inventoryUpdate.js
        │   └── saleDataConvert.js
        ├── strings
        │   └── index.js
        └── validations
            ├── admVerify.js
            ├── caractersVerify.js
            ├── emailVerify.js
            ├── fieldVerify.js
            ├── idVerify.js
            ├── index.js
            ├── newEmailUpdateVerify.js
            ├── newProductNameUpdateVerify.js
            ├── numbersVerify.js
            ├── passwordVerify.js
            ├── productInventaryVerify.js
            ├── registeredProductsVerify.js
            ├── saleDataVerify.js
            ├── saleNumbersVerify.js
            ├── saleStringsVerify.js
            ├── saleVerify.js
            └── unityVerify.js
```
---

# Pré-requisitos

## Ferramentas necessárias

Para rodar o projeto, você vai precisar instalar as seguintes ferramentas:
 - [Git](https://git-scm.com);
 - [Node.js](https://nodejs.org/en/);
 - Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou outro de sua preferência;
 - Um cliente de API REST como [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência;

## Rodando no servidor local

 - Clone do Projeto e instale as dependências

    ```bash
    # Clone este repositório
    $ git clone `https://github.com/WanderDinizVeloso/My-Store-API.git`

    # Acesse a pasta do projeto no terminal/cmd
    $ cd My-Store-API

    # Instale as dependências
    $ npm install
    ```
 - Crie o um arquivo chamado `.env` na raiz do projeto com as seguintes configurações:
    
    ### .env

    - PORT: Porta que rodará localmente o projeto (ex. 3000);
    - URL: URL do banco MongoDB (ex. mongodb://localhost:27017)
    - SECRET: Segredo utilizado na autenticação.
    - EXPIRES_IN: tempo de duração dos tokens gerados. (ex. `1d`)
    - ALGORITHM: algorítmo de criptografia do token. (ex. `HS256`)
    - EMAIL_ADM: email para acesso como administrador do sistema. 
    - PASSWORD_ADM: senha para acesso como administrador do sistema.


    >⚠️ ATENÇÃO ⚠️
    > - Existe um modelo do .env (.example.env) para ajudar na sua criação.
    > - Para mais detalhes sobre SECRET, EXPIRES_IN e ALGORITHM vide: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    > - Tanto o email quanto a senha de administrador deve atender aos mesmos requisitos de sua criação como usuário. vide: [Users create](#users-create).

 - Inicie o sistema:

    ```bash
    # Inicie o sistema
    $ npm start
    ou
    $ npm run dev ('para ambiente de desenvolvimento')
    ```

 - Faça as requisições pelo [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência;

## Quer contribuir com o projeto?

  - Crie uma branch e faça sua contribuição:

    ```bash
    # Crie uma branch a partir da branch main
    $ git checkout -b nome-da-nova-branch

    # Adicione as mudanças desejadas com os devidos commits
    $ git add . ('adicina as mudanças ao stage do Git')
    $ git commit -m 'informacao do conteúdo do commit' ('salvando as alterações de cada pequena alteracao em um commit')
    $ git push -u origin nome-da-nova-branch ('adicina a nova branch no reposiótio remoto do Projeto')
    ```
  - Crie um novo `Pull Request` (PR):
     - Vá até a página de `Pull Requests` do repositório no GitHub
     - Clique no botão verde `"New pull request"`
     - Clique na caixa de seleção `"Compare"` e escolha a sua branch com atenção
     - Clique no botão verde `"Create pull request"`
     - Adicione uma descrição para o Pull Request
     - Clique no botão verde `"Create pull request"`
     - Me marque para revisar. `:)` [Wander](https://github.com/WanderDinizVeloso)

// Fonte utilizada na criação do `Pré-requisitos`: [Trybe](https://www.betrybe.com)

---

# Orientações detalhadas de como utilizar

## Users

 - Descrição: Responsável pela criação, remoção, atualização e leitura de usuários da API. 

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchAll` e `searchId` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
> - Para a execução de `remove` e `update` é necessáro:
>    - Estar logado e;
>    - Ser o detentor da conta criada ou usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
     
### Users create
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/users'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=NAO&color=119CE1&style=flat-square&logo="/>

- Descrição: Responsável pela criação de usuários.

- Body:

    ```json
    {
      "firstName": " ",
      "lastName": " ",
      "email": " ",
      "password": " ", 
    }
    ```

- Retorno:

    ```json
    {
      "message": "'user' created successfully.",
      "createdUser": {
        "_id": " ",
        "firstName": " ",
        "lastName": " ",
        "email": " ",
        "role": " "
      }
    }
    ```
    Tradução da mensagem: "'usuário' criado com sucesso."

    >⚠️ ATENÇÃO: Campos `"_id"` e `"role"` são gerados automaticamente pelo sistema. ⚠️
 
- Campos obrigatórios:

  - `firstName`:
    
    - Tradução: nome

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'firstName' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' é obrigatório."

      - `Conter ao menos 03 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'firstName' field must contain at least 3 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve conter pelo menos 3 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'firstName' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve ser uma string."

  - `lastName`:
    
    - Tradução: sobrenome

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'lastName' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'sobrenome' é obrigatório."

      - `Conter ao menos 03 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'lastName' field must contain at least 3 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'sobrenome' deve conter pelo menos 3 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'lastName' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'sobrenome' deve ser uma string."

  - `email`:
      
    - Tradução: email

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'email' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'email' é obrigatório."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'email' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'email' deve ser uma string."

      - `Ser um email válido`:
          ```json
          {
            "error": {
              "message": "The invalid 'email' field."
            }
          }
          ```
          Tradução da mensagem: "Campo 'email' inválido."

      - `Ser único no banco de dados`:
          ```json
          {
            "error": {
              "message": "'email' is already."
            }
          }
          ```
          Tradução da mensagem: "'email' ja existe."

  - `password`:

    >⚠️ ATENÇÃO ⚠️
    > - Visando maior segurança as senhas:
    >   - São encriptadas antes de armazenadas no banco de dados, através do [bcrypt](https://www.npmjs.com/package/bcrypt);
    >   - Não são retornadas em consultas por `searchAll` e `searchId`.

    - Tradução: senha

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'password' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' é obrigatório."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'password' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve ser uma string."

      - `Conter ao menos 10 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'password' field must contain at least 10 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve conter pelo menos 10 caracteres"

      - `Conter caracters maiúsculos, números e especiais`:
          ```json
          {
            "error": {
              "message": "The 'password' field must contain at least one: a capital letter, a number and a special character (!, $, #, %, _)."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve conter pelo menos: uma letra maiúscula, um número e um caracter especial (!, $, #, %, _)."

### Users remove
<img src="https://img.shields.io/static/v1?label=Metodo&message=DEL&color=FF2102&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/users:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela remoção de usuários. 

- Retorno:

    ```json
    {
      "message": "'user' deleted successfully,",
      "deletedUser": {
        "deletedCount": 1,
        "user": {
          "_id": " ",
          "firstName": " ",
          "lastName": " ",
          "email": " ",
          "role": " "
        }
      }
    }
    ```
    Tradução da mensagem: "'usuário' excluido com sucesso."

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `remove` é necessáro:
>    - Estar logado e;
>    - Ser o detentor da conta criada ou usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)

- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/usuário deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'user' not found."
            }
          }
          ```
          Tradução da mensagem: "'usuário' não encontrado" 

### Users searchAll
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/users'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela leitura de todos usuários. 

- Retorno:

    ```json
    {
      "users": [
        {
          "_id": " ",
          "firstName": " ",
          "lastName": " ",
          "email": " ",
          "role": "  "
        },
        {
          "_id": " ",
          "firstName": " ",
          "lastName": " ",
          "email": " ",
          "role": "  "
        },
        ...
      ]
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchAll` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)

- Erro retornado no searchAll:

  - `nenhum usuário cadastrado no banco de dados`:
      ```json
      {
        "error": {
          "message": "no registered 'users'."
        }
      }
      ```
      Tradução da mensagem: "não há 'usuários' registrados".

### Users searchById
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/users:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela leitura de um usuário pelo id. 

- Retorno:

    ```json
    {
      "user": {
        "_id": " ",
        "firstName": " ",
        "lastName": " ",
        "email": " ",
        "role": " "
      }
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchId` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
 
- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/usuário deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'user' not found."
            }
          }
          ```
          Tradução da mensagem: "'usuário' não encontrado" 

### Users update
<img src="https://img.shields.io/static/v1?label=Metodo&message=PUT&color=D88A12&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/users:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela atualização dos dados do usuário. 

- body:

    ```json
    {
      "firstName": " ",
      "lastName": " ",
      "email": " ",
      "password": " ",
    }
    ```

- Retorno:

    ```json
    {
      "message": "'user' modified successfully.",
      "updatedUser": {
        "modifiedCount": 1,
        "newUserData": {
          "_id": " ",
          "firstName": " ",
          "lastName": " ",
          "email": " ",
          "role": " "
        }
      }
    }
    ```
    Tradução da mensagem: "'usuário' modificado com sucesso."

    >⚠️ ATENÇÃO: Campos `"_id"`, `"role"` e `modifiedCount` são gerados automaticamente pelo sistema. ⚠️

>⚠️ ATENÇÃO ⚠️
>  - Para a execução de `update` é necessáro:
>    - Estar logado e;
>    - Ser o detentor da conta criada ou usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
 
- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/usuário deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'user' not found."
            }
          }
          ```
          Tradução da mensagem: "'usuário' não encontrado" 

  - `firstName`:
    
    - Tradução: nome

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'firstName' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' é obrigatório."

      - `Conter ao menos 03 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'firstName' field must contain at least 3 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve conter pelo menos 3 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'firstName' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve ser uma string."

  - `lastName`:
    
    - Tradução: sobrenome

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'lastName' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'sobrenome' é obrigatório."

      - `Conter ao menos 03 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'lastName' field must contain at least 3 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'sobrenome' deve conter pelo menos 3 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'lastName' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'sobrenome' deve ser uma string."

  - `email`:
      
    - Tradução: email

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'email' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'email' é obrigatório."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'email' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'email' deve ser uma string."

      - `Ser um email válido`:
          ```json
          {
            "error": {
              "message": "The invalid 'email' field."
            }
          }
          ```
          Tradução da mensagem: "Campo 'email' inválido."

      - `Ser único no banco de dados`:
          ```json
          {
            "error": {
              "message": "'email' is already."
            }
          }
          ```
          Tradução da mensagem: "'email' ja existe."

      - `Para troca de email, o novo email não deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'new email' is already."
            }
          }
          ```
          Tradução da mensagem: "'novo email' ja existe."

  - `password`:

    >⚠️ ATENÇÃO ⚠️
    >  - Visando maior segurança as senhas:
    >    - São encriptadas antes de armazenadas no banco de dados, através do [bcrypt](https://www.npmjs.com/package/bcrypt);
    >    - Não são retornadas em consultas por `searchAll` e `searchId`.

    - Tradução: senha

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'password' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' é obrigatório."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'password' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve ser uma string."

      - `Conter ao menos 10 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'password' field must contain at least 10 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve conter pelo menos 10 caracteres"

      - `Conter caracters maiúsculos, números e especiais`:
          ```json
          {
            "error": {
              "message": "The 'password' field must contain at least one: a capital letter, a number and a special character (!, $, #, %, _)."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve conter pelo menos: uma letra maiúscula, um número e um caracter especial (!, $, #, %, _)."

## Login
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/login'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=NAO&color=119CE1&style=flat-square&logo="/>

- Descrição: Responsável por dar autorização para acesso ao sistema pelo usuário. 

- body:

    ```json
    {
      "email": " ",
      "password": " ",
    }
    ```

- Retorno:

    ```json
    {
      "token": " "
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para efetuar login como administrator do sistema basta digitar o `email` e `password` cadastrados no arquivo [.env](#env).
>
> - Ao efetuar o primeiro acesso como administrador, será cadastrado automaticamente seus respectivos dados no sistema.

- Erro retornado no login:

  - `Email ou senha incorreto`:

      ```json
      {
        "error": {
          "message": "The invalid 'email or password' field."
        }
      }
      ```
      Tradução da mensagem: "O campo de 'e-mail ou senha' inválido.".
 
- Campos obrigatórios:

  - `email`:
      
    - Tradução: email

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'email' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'email' é obrigatório."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'email' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'email' deve ser uma string."

      - `Ser um email válido`:
          ```json
          {
            "error": {
              "message": "The invalid 'email' field."
            }
          }
          ```
          Tradução da mensagem: "Campo 'email' inválido."

  - `password`:

    >⚠️ ATENÇÃO ⚠️
    >  - Visando maior segurança as senhas:
    >    - São encriptadas antes de armazenadas no banco de dados, através do [bcrypt](https://www.npmjs.com/package/bcrypt);
    >    - Não são retornadas em consultas por `searchAll` e `searchId`.      

    - Tradução: senha

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'password' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' é obrigatório."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'password' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve ser uma string."

      - `Conter ao menos 10 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'password' field must contain at least 10 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve conter pelo menos 10 caracteres"

      - `Conter caracters maiúsculos, números e especiais`:
          ```json
          {
            "error": {
              "message": "The 'password' field must contain at least one: a capital letter, a number and a special character (!, $, #, %, _)."
            }
          }
          ```
          Tradução da mensagem: "O campo 'senha' deve conter pelo menos: uma letra maiúscula, um número e um caracter especial (!, $, #, %, _)."

## Products

 - Descrição: Responsável pela criação, remoção, atualização e leitura de produtos. 

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchAll` e `searchId` é necessáro:
>    - Estar logado.
>
> - Para a execução de `create`, `remove` e `update` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
     
### Products create
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/products'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela criação de produtos. 

- body:

    ```json
    {
      "name": " ",
      "category": " ",
      "unity": " ",
      "quantity": " ",
      "price": " "
    }
    ```

- Retorno:

    ```json
    {
      "message": "'product' created successfully.",
      "createdProduct": {
        "_id": " ",
        "name": " ",
        "category": " ",
        "unity": " ",
        "quantity": " ",
        "price": " "
      }
    }
    ```
    Tradução da mensagem: "'produto' criado com sucesso."

    >⚠️ ATENÇÃO: O Campo `"_id"` é gerado automaticamente pelo sistema. ⚠️

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `create` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
 
- Campos obrigatórios:

  - `name`:
    
    - Tradução: nome

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'name' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' é obrigatório."

      - `Conter ao menos 04 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'name' field must contain at least 4 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve conter pelo menos 4 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'name' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve ser uma string."

      - `Ser único no banco de dados`:
          ```json
          {
            "error": {
              "message": "'product' is already."
            }
          }
          ```
          Tradução da mensagem: "'produto' ja existe."

  - `category`:
    
    - Tradução: categoria

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'category' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'categoria' é obrigatório."

      - `Conter ao menos 04 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'category' field must contain at least 4 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'categoria' deve conter pelo menos 4 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'category' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'categoria' deve ser uma string."

  - `unity`:
    
    - Tradução: unidade

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'unity' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'unidade' é obrigatório."

      - `Conter ao entre 02 e 03 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'unity' field must contain between 2 and 3 characters."
            }
          }
          ```
          Tradução da mensagem: "O campo 'unidade' deve conter entre 2 e 3 caracteres."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'unity' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'unidade' deve ser uma string."

  - `quantity`:
    
    - Tradução: quantidade

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'quantity' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'quantidade' é obrigatório."

      - `Ser um número positivo`:
          ```json
          {
            "error": {
              "message": "The 'quantity' field must be a positive number."
            }
          }
          ```
          Tradução da mensagem: "O campo 'quantidade' deve ser um número positivo."

  - `price`:
    
    - Tradução: preço

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'price' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'preço' é obrigatório."

      - `Ser um número positivo`:
          ```json
          {
            "error": {
              "message": "The 'preço' field must be a positive number."
            }
          }
          ```
          Tradução da mensagem: "O campo 'preço' deve ser um número positivo."

### Products remove
<img src="https://img.shields.io/static/v1?label=Metodo&message=DEL&color=FF2102&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/products:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela remoção de produtos. 

- Retorno:

    ```json
    {
      "message": "product deleted successfully,",
      "deletedProduct": {
        "deletedCount": 1,
        "product": {
          "_id": " ",
          "name": " ",
          "category": " ",
          "unity": " ",
          "quantity": " ",
          "price": " "
        }
      }
    }
    ```
    Tradução da mensagem: "'usuário' excluido com sucesso."

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `remove` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)

- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/produto deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'product' not found."
            }
          }
          ```
          Tradução da mensagem: "'product' não encontrado" 

### Products searchAll
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/products'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>
  
- Descrição: Responsável pela leitura de todos os produtos cadastrados. 

- Retorno:

    ```json
    {
      "products": [
        {
          "_id": " ",
          "name": " ",
          "category": " ",
          "unity": " ",
          "quantity": " ",
          "price": " "
        },
        {
          "_id": " ",
          "name": " ",
          "category": " ",
          "unity": " ",
          "quantity": " ",
          "price": " "
        },
        ...
      ]
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchAll` é necessáro:
>    - Estar logado.
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)

- Erro retornado no searchAll:

  - `nenhum usuário cadastrado no banco de dados`:
      ```json
      {
        "error": {
          "message": "no registered 'products'."
        }
      }
      ```
      Tradução da mensagem: "não há 'produtos' registrados".

### Products searchById
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/products:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela leitura de produtos pelo id. 

- Retorno:

    ```json
    {
      "product": {
        "_id": " ",
        "name": " ",
        "category": " ",
        "unity": " ",
        "quantity": " ",
        "price": " "
      }
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchById` é necessáro:
>    - Estar logado.
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
 
- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/usuário deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'product' not found."
            }
          }
          ```
          Tradução da mensagem: "'produto' não encontrado" 

### Products update
<img src="https://img.shields.io/static/v1?label=Metodo&message=PUT&color=D88A12&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/products:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela atualização dos dados do produto. 

- body:

    ```json
    {
      "name": " ",
      "category": " ",
      "unity": " ",
      "quantity": " ",
      "price": " "
    }
    ```

- Retorno:

    ```json
    {
      "message": "'product' modified successfully.",
      "createdProduct": {
        "_id": " ",
        "name": " ",
        "category": " ",
        "unity": " ",
        "quantity": " ",
        "price": " "
      }
    }
    ```
    Tradução da mensagem: "'produto' modificado com sucesso."

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `update` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
 
- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/usuário deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'product' not found."
            }
          }
          ```
          Tradução da mensagem: "'produto' não encontrado" 

  - `name`:
    
    - Tradução: nome

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'name' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' é obrigatório."

      - `Conter ao menos 04 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'name' field must contain at least 4 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve conter pelo menos 4 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'name' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'nome' deve ser uma string."

      - `Ser único no banco de dados`:
          ```json
          {
            "error": {
              "message": "'product' is already."
            }
          }
          ```
          Tradução da mensagem: "'produto' ja existe."

      - `Para troca de nome do produto, o novo nome não deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'new product name' is already."
            }
          }
          ```
          Tradução da mensagem: "'novo nome do produto' ja existe."

  - `category`:
    
    - Tradução: categoria

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'category' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'categoria' é obrigatório."

      - `Conter ao menos 04 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'category' field must contain at least 4 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'categoria' deve conter pelo menos 4 caracteres"

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'category' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'categoria' deve ser uma string."

  - `unity`:
    
    - Tradução: unidade

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'unity' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'unidade' é obrigatório."

      - `Conter ao entre 02 e 03 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'unity' field must contain between 2 and 3 characters."
            }
          }
          ```
          Tradução da mensagem: "O campo 'unidade' deve conter entre 2 e 3 caracteres."

      - `Ser um texto/string`:
          ```json
          {
            "error": {
              "message": "The 'unity' field must be a string."
            }
          }
          ```
          Tradução da mensagem: "O campo 'unidade' deve ser uma string."

  - `quantity`:
    
    - Tradução: quantidade

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'quantity' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'quantidade' é obrigatório."

      - `Ser um número positivo`:
          ```json
          {
            "error": {
              "message": "The 'quantity' field must be a positive number."
            }
          }
          ```
          Tradução da mensagem: "O campo 'quantidade' deve ser um número positivo."

  - `price`:
    
    - Tradução: preço

    - Requisitos do campo / Erro retornado:

      - `Obrigatório`:
          ```json
          {
            "error": {
              "message": "The 'price' field is required."
            }
          }
          ```
          Tradução da mensagem: "O campo 'preço' é obrigatório."

      - `Ser um número positivo`:
          ```json
          {
            "error": {
              "message": "The 'preço' field must be a positive number."
            }
          }
          ```
          Tradução da mensagem: "O campo 'preço' deve ser um número positivo."

## Sales

  - Descrição: Responsável pela criação, remoção, atualização e leitura de vendas de produtos previamente cadastrados. 

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `create`,`searchAll` e `searchId` é necessáro:
>    - Estar logado.
>
> - Para a execução de `remove` e `update` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
>
> - Para criar / atualizar uma venda, é necessário enviar um array de produtos, sendo eles previamente cadastrados no banco de dados;
>
> - Na execução de `create` e `update` será checado:
>   - Se o produto contém saldo suficiente para a sua venda / atualização;
>   - Se cada produto a ser vendido contém os mesmos requisitos de criaçao / atualização verificados no [create](#products-create) e [update](#products-update) do [Products](#products) 
>
> - Na execução de `remove` será restabelecida a quantidade do produto registrado na venda excluida.
     
### Sales create
<img src="https://img.shields.io/static/v1?label=Metodo&message=POST&color=4DC31A&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/sales'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela criação de uma venda dos produtos previamente cadastrados.

- body:

    ```json
    [
      {
        "name": " ",
        "category": " ",
        "unity": " ",
        "quantity": " ",
        "price": " "
      },
      {
        "name": " ",
        "category": " ",
        "unity": " ",
        "quantity": " ",
        "price": " "
      },
      ...
    ]
    ```

- Retorno:

    ```json
    {
      "message": "'sale' created successfully.",
      "createdSale": {
        "_id": " ",
        "creationDate": {
          "userId": " ",
          "date": " "
        },
        "amount": " ",
        "soldProducts": [
          {
            "_id": " ",
            "name": " ",
            "category": " ",
            "unity": " ",
            "quantity": " ",
            "price": " ",
            "total": " "
          },
          {
            "_id": " ",
            "name": " ",
            "category": " ",
            "unity": " ",
            "quantity": " ",
            "price": " ",
            "total": " "
          },
          ...
        ]
      }
    }
    ```
    Tradução da mensagem: "'venda' criada com sucesso."

    >⚠️ ATENÇÃO ⚠️
    > Os seguintes campos serão gerados automaticamente pelo sistema:
    > - `"_id"`: id da venda;
    > - `"creationDate"`: armazena o id do usuário que criou a venda e a respectiva data e hora;
    > - `"amount"`: valor total da venda;
    > - `"total"`: multiplicação da quantidade do produto vendido pelo seu preço unitário.

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `create` é necessário:
>    - Estar logado.
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
>
> - Na execução de `create` será checado:
>   - Se o produto contém saldo suficiente para a sua venda;
>   - Se cada produto a ser vendido contém os mesmos requisitos de criaçao verificados no [create](#products-create) do [Products](#products)

- Erro(s) retornado(s) no create:

  - `Não atendimento aos mesmos requisitos de criação de um produto`:
      ```json
      {
        "error": {
          "message": "The invalid 'sale' field."
        }
      }
      ```
      Tradução da mensagem: "O campo de 'venda' inválido.".

  - `Um ou mais produtos na lista de venda não existem no banco de dados`:
      ```json
      {
        "error": {
          "message": "shopping list with unregistered products: (list)"
        }
      }
      ```
      Tradução da mensagem: "Lista de compras com produtos não cadastrados: (lista)". `OBS.:` no lugar de '(lista)'será retornado o nome dos produtos não cadastrados no banco.

  - `Um ou mais produtos na lista de venda não contém saldo suficiente para a venda`:
      ```json
      {
        "error": {
          "message": "Insufficient stock of products: (list)"
        }
      }
      ```
      Tradução da mensagem: "Estoque insuficiente de produtos: (lista)". `OBS.:` no lugar de '(lista)'será retornado o nome dos produtos com ausência de saldo.

### Sales remove
<img src="https://img.shields.io/static/v1?label=Metodo&message=DEL&color=FF2102&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/sales:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela remoção de uma venda realizada. 

- Retorno:

    ```json
    {
      "message": "'sale' deleted successfully,",
      "deletedUser": {
        "deletedCount": 1,
        "saleDeleted": {
          "_id": " ",
          "creationDate": {
            "userId": " ",
            "date": " "
          },
          "amount": " ",
          "soldProducts": [
            {
              "_id": " ",
              "name": " ",
              "category": " ",
              "unity": " ",
              "quantity": " ",
              "price": " ",
              "total": " "
            }
          ]
        }
      }
    }
    ```
    Tradução da mensagem: "'venda' excluida com sucesso."

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `remove` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)

>⚠️ ATENÇÃO ⚠️
> - Na execução de `remove` será restabelecida a quantidade do produto registrado na venda excluida.

- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/venda deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'sale' not found."
            }
          }
          ```
          Tradução da mensagem: "'venda' não encontrada" 

### Sales searchAll
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/sales'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela leitura de todas as vendas realizadas. 

- Retorno:

    ```json
    {
      "sales": [
        {
          "_id": " ",
          "creationDate": {
            "userId": " ",
            "date": " "
          },
          "amount": " ",
          "soldProducts": [
            {
              "_id": " ",
              "name": " ",
              "category": " ",
              "unity": " ",
              "quantity": " ",
              "price": " ",
              "total": " "
            },
            {
              "_id": " ",
              "name": " ",
              "category": " ",
              "unity": " ",
              "quantity": " ",
              "price": " ",
              "total": " "
            },
            ...
          ]
        },
        {
          "_id": " ",
          "creationDate": {
            "userId": " ",
            "date": " "
          },
          "amount": " ",
          "soldProducts": [
            {
              "_id": " ",
              "name": " ",
              "category": " ",
              "unity": " ",
              "quantity": " ",
              "price": " ",
              "total": " "
            },
            {
              "_id": " ",
              "name": " ",
              "category": " ",
              "unity": " ",
              "quantity": " ",
              "price": " ",
              "total": " "
            },
            ...
          ]
        },
        ...
      ]
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchAll` é necessáro:
>    - Estar logado.
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)

- Erro retornado no searchAll:

  - `nenhuma venda cadastrada no banco de dados`:
      ```json
      {
        "error": {
          "message": "no registered 'sales'."
        }
      }
      ```
      Tradução da mensagem: "não há 'vendas' registradas".

### Sales searchById
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/sales:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela leitura de uma venda pelo id. 

- Retorno:

    ```json
    {
      "sale": {
        "_id": " ",
        "creationDate": {
          "userId": " ",
          "date": " "
        },
        "amount": " ",
        "soldProducts": [
          {
            "_id": " ",
            "name": " ",
            "category": " ",
            "unity": " ",
            "quantity": " ",
            "price": " ",
            "total": " "
          },
          {
            "_id": " ",
            "name": " ",
            "category": " ",
            "unity": " ",
            "quantity": " ",
            "price": " ",
            "total": " "
          },
          ...
        ]
      }
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchById` é necessáro:
>    - Estar logado.
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
 
- Campos obrigatórios:

  - `id`:
    
    - Tradução: id

    - Requisitos do campo / Erro retornado:

      - `Conter 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter 24 caracteres" 

      - `id/sale deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'sale' not found."
            }
          }
          ```
          Tradução da mensagem: "'venda' não encontrada"

### Sales update
<img src="https://img.shields.io/static/v1?label=Metodo&message=PUT&color=D88A12&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/sales:id'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela atualização de dados de uma venda realizada. 

- body:

    ```json
    [
      {
        "name": " ",
        "category": " ",
        "unity": " ",
        "quantity": " ",
        "price": " "
      },
      {
        "name": " ",
        "category": " ",
        "unity": " ",
        "quantity": " ",
        "price": " "
      },
      ...
    ]
    ```

- Retorno:

    ```json
    {
      "message": "'sale' modified successfully.",
      "updatedSale": {
        "modifiedCount": 1,
        "newData": {
          "_id": " ",
          "creationDate": {
            "userId": " ",
            "date": " "
          },
          "amount": " ",
          "soldProducts": [
            {
              "_id": " ",
              "name": " ",
              "category": " ",
              "unity": " ",
              "quantity": " ",
              "price": " ",
              "total": " "
            },
            {
              "_id": " ",
              "name": " ",
              "category": " ",
              "unity": " ",
              "quantity": " ",
              "price": " ",
              "total": " "
            },
            ...
          ],
          "modifiedDate": {
            "userId": " ",
            "date": " "
          }
        }
      }
    }
    ```
    Tradução da mensagem: "'venda' modificada com sucesso."

    >⚠️ ATENÇÃO ⚠️
    > Os seguintes campos serão gerados automaticamente pelo sistema:
    > - `"modifiedDate"`: armazena o id do usuário que modificou a venda e a respectiva data e hora.

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `update` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
>
> - Na execução de `update` será checado:
>   - Se o produto contém saldo suficiente para a sua modificação;
>   - Se cada produto a ser modificado contém os mesmos requisitos de criaçao verificados no [create](#products-create) do [Products](#products)

- Erro(s) retornado(s) no update:

  - `Não atendimento aos mesmos requisitos de criação de um produto`:
      ```json
      {
        "error": {
          "message": "The invalid 'sale' field."
        }
      }
      ```
      Tradução da mensagem: "O campo de 'venda' inválido.".

  - `Um ou mais produtos na lista de venda não existe no banco de dados`:
      ```json
      {
        "error": {
          "message": "shopping list with unregistered products: (list)"
        }
      }
      ```
      Tradução da mensagem: "Lista de compras com produtos não cadastrados: (lista)". `OBS.:` no lugar de '(lista)'será retornado o nome dos produtos não cadastrados no banco.

  - `Um ou mais produtos na lista de venda não contém saldo suficiente para a venda`:
      ```json
      {
        "error": {
          "message": "Insufficient stock of products: (list)"
        }
      }
      ```
      Tradução da mensagem: "Estoque insuficiente de produtos: (lista)". `OBS.:` no lugar de '(lista)'será retornado o nome dos produtos com ausência de saldo.

## Error

  - Descrição: Responsável por capturar, guardar e leitura de todos os erros internos disparados na execução da API.

### Error searchAll
<img src="https://img.shields.io/static/v1?label=Metodo&message=GET&color=9002FF&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Rota&message='/error'&color=712776&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autenticacao&message=SIM&color=DFCA11&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Autorizacao&message=SIM&color=DFCA11&&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Param&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Body&message=NAO&color=119CE1&style=flat-square&logo="/> <img src="https://img.shields.io/static/v1?label=Header&message=SIM&color=DFCA11&&style=flat-square&logo="/>

- Descrição: Responsável pela leitura de todos os erros internos disparaos na execução da API. 

- Retorno:

    ```json
    {
      "errors": [
        {
          "_id": " ",
          "message": " ",
          "method": " ",
          "URL": " ",
          "bodyWithoutPassword": {
            ...
          },
          "user": {
            ...
          },
          "date": " "
        },
        {
          "_id": " ",
          "message": " ",
          "method": " ",
          "URL": " ",
          "bodyWithoutPassword": {
            ...
          },
          "user": {
            ...
          },
          "date": " "
        },
        ...
      ]
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchAll` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)

---

# Contribuição

Bora entrar para esta lista? `;)` [AQUI](#pré-requisitos) 

---

# Agradecimentos

Agradeço:
 - À minha família por me apoiar nos estudos em minha transição de carreira;
 - À [Trybe](https://www.betrybe.com) por me dar a oportunidade de aprender uma nova carreira, com seu Curso de Desenvolvimento WEB Full-Stack, na modalidade [MSC](https://www.betrybe.com/msc-modelo-de-sucesso-compartilhado#investimento-como-functiona-mobile-section).
 - Toda a equipe Trybe, em especial:
    - [Jadezita](https://www.linkedin.com/in/jade--vieira/) e [Rê](https://www.linkedin.com/in/renata-nazar%C3%A9-magalh%C3%A3es/), pelo carinho e apoio em [softs skills](https://www.youtube.com/watch?v=yA3sc5mnctg&t=1s);
    - [Pedro](https://www.linkedin.com/in/phramos07/), [Nato](https://www.linkedin.com/in/renato-alvares/), [Ricci](https://www.linkedin.com/in/henriquericci/) e [Rafa Guimarães](https://www.linkedin.com/in/rafaelmguimaraes/), pelo belíssimo apoio e ensinamentos em back-end;
    - [Daniel](https://www.linkedin.com/in/marciodanielll/) e [Rafa Medeiros](https://www.linkedin.com/in/rafael-medeiros-gomes/), monitores Summer de Instrução, pelo apoio, principalmente na introdução de novos conteúdos.     

---

# Autor

 <img src="https://avatars.githubusercontent.com/u/82230642?v=4" width="100px;" alt="minha foto"/>
 <br />
  Wander Diniz Veloso
<br />
  Estudante de Desenvolvimento WEB e a cada dia mais apaixonado por tecnologia!

Entre em contato!

<section align="center"> 
  <a href="https://www.linkedin.com/in/wander-diniz-veloso" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</section>

---

Feito com muito ❤️ e dedicação por Wander Diniz Veloso. 

---