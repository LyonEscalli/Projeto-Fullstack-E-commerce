Olá!

Este projeto foi realizado em Outubro/2022 como teste técnico para o processo seletivo de uma empresa.

O projeto é um site de E-commerce construído em React.js e Node.js (utilizando Typescript e Orientação a objetos) e é composto pelos seguintes requisitos:

1- O sistema deve ter um formulário de cadastro de pedidos <br/>
2- O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras <br/>
3- A lista de compras é composta por um ou mais produtos e a quantidade solicitada para cada um deles. <br/>
4- O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele não queira mais. <br/>
5- A cada alteração na lista de compras o sistema deve calcular o valor total do pedido. <br/>
6- Todas essas informações devem ser salvas em um banco de dados que você vai modelar. <br/>
7- Cada pedido salvo deve debitar a quantidade do produto correspondente de seu estoque. <br/>
8- O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no estoque. <br/>
9- O sistema também deve ter uma função para mostrar o estoque atual exibindo: Nome do produto e a quantidade em estoque. <br/>

O projeto também possui funcionalidade de criação de contas de usuário e login, personalizando a exibição da lista de compras efetuada pelo usuário logado.

Para visualizar a execução do projeto após o clone para o repositório local, é preciso configurar as tabelas do banco de dados conforme dispostas no arquivo 'queries.sql' e configurar o arquivo '.env' conforme o esquema abaixo:

DB_HOST = "Insira seus dados"
DB_USER = "Insira seus dados"
DB_PASSWORD = "Insira seus dados"
DB_SCHEMA = "Insira seus dados"
PORT = 3307

JWT_EXPIRES_IN = 24h
JWT_KEY = "Insira seus dados"
BCRYPT_COST = 12

Então é preciso rodar os seguintes comandos:

~ npm install (para instalar todas as dependências do projeto)
~ npm run backend (para inicar o servidor do backend)
~npm run start (para iniciar o front-end da aplicação em React.js)


