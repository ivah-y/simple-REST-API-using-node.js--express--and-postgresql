# Simple REST API using Node.js, Express, and Postgresql

## Description

A simple REST API built using Node.js and express connecting a Postgresql database and make Create, Read, Update, and Delete (CRUD) operations of people's profiles. 

## Packages and Dependencies

- cors 2.8.5
- dotenv 10.0.0
- express 4.17.1
- pg 8.7.1
- nodemon 2.0.12

## How-to

1. Download repository: 

     `$ git clone https://github.com/ivah-y/simple-REST-API-using-node.js--express--and-postgresql.git`

2. Go to directory

    `$ cd /simple-REST-API-using-node.js--express--and-postgresql`

3. Create PostgreSQL database and add access credentials to your own.
    `$ psql postgres`

4. Copy text from init.sql and paste to postgres=# 

5. To start application, open terminal, then run `$ npm start`
 
### Note

- Postgresql access credentials hidden from Github in `.env` file


##### disclaimer
`please be ez on me on this one. This is my first API and I well understand that it is not a good practice to put apikey in the db. I am still going over the code and I am still learning on how to put a secure API key using HTTP headers.`
