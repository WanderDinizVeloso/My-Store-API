# My-Store-API 

Projeto criado visando colocar em prática os conhecimentos adquiridos em Back-end, onde crio uma API para cadastro/leitura de produtos/vendas composta de:

 - Usuários:
    - Criação;
    - Remoçao;
    - Atualização;
    - Leitura por Id;
    - Leitura de todos os usuários cadastrados.

 - Cadastro de produtos:
    - Criação;
    - Remoçao;
    - Atualização;
    - Leitura por Id;
    - Leitura de todos os produtos cadastrados.

 - Cadastro de vendas:
    - Criação;
    - Remoçao;
    - Atualização;
    - Leitura por Id;
    - Leitura de todas as vendas cadastradas.

 - Leitura de todos os erros internos possivelmente encontrados na execução da API;

---

## Sumário

- [Status](#status)
- [Licença](#licença)
- [Habilidades desenvolvidas](#habilidades-desenvolvidas)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Orientações detalhadas de como utilizar](#orientações-detalhadas-de-como-utilizar)
  - [Users](#users)
    - [Users create](#users-create)
    - [Users remove](#users-remove)
    - [Users searchAll](#users-searchall)
    - [Users searchById](#users-searchbyid)
    - [Users update](#users-update)
  - [Login](#login)
- [Autor](#autor)

---

## Status

Este projeto está em constante construção, pois a cada conhecimento adquirido e novas tecnologias aprendidas, as implementarei visando melhorar sua perfornance e escalabilidade.

---

## Licença

Este projeto esta sobe a licença [MIT](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT).

---

## Habilidades desenvolvidas

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

## Tecnologias utilizadas

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

## Pré-requisitos

---

## Orientações detalhadas de como utilizar

### Users

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
     

#### Users create

- Rota: '/users'

- Método: POST

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


#### Users remove

- Rota: '/users:id'

- Método: DELETE

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

      - `Conter ao menos 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain at least 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter pelo menos 24 caracteres" 

      - `id/usuário deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'user' not found."
            }
          }
          ```
          Tradução da mensagem: "'usuário' não encontrado" 


#### Users searchAll

- Rota: '/users'

- Método: GET

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


#### Users searchById

- Rota: '/users:id'

- Método: GET

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

      - `Conter ao menos 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain at least 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter pelo menos 24 caracteres" 

      - `id/usuário deve existir no banco de dados`:
          ```json
          {
            "error": {
              "message": "'user' not found."
            }
          }
          ```
          Tradução da mensagem: "'usuário' não encontrado" 


#### Users update

- Rota: '/users:id'

- Método: PUT

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

      - `Conter ao menos 24 caracteres`:
          ```json
          {
            "error": {
              "message": "The 'id' field must contain at least 24 characters"
            }
          }
          ```
          Tradução da mensagem: "O campo 'id' deve conter pelo menos 24 caracteres" 

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


### Login

- Rota: '/login'

- Método: POST

- Retorno:

    ```json
    {
      "token": " "
    }
    ```

>⚠️ ATENÇÃO ⚠️
> - Para efetuar login como administrator do sistema, o `email` e `password`, além de atenderem os requisitos abaixo descritos, devem ser os mesmos cadastrados no arquivo [.env](#.env).

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


### Products

>⚠️ ATENÇÃO ⚠️
> - Para a execução de `searchAll` e `searchId` é necessáro:
>    - Estar logado.
>
> - Para a execução de `create`, `remove` e `update` é necessáro:
>    - Estar logado e;
>    - Ser usuário administrator do sistema (role: "adm").
>
>    Vide: [Authentication](#authentication), [Authorization](#authorization)
     

#### Products create

- Rota: '/products'

- Método: POST

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



---

## Autor