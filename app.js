const path = require('path')
const express = require('express');
//criação de um app, onde "app" é o endereço deste app
const app = express();
//use layout
const ExpressLayout = require('express-ejs-layouts');
//tell the app where the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(ExpressLayout);
//USING TEMPLATE ENGINE "EJS"para envia conteudo html para o browser
app.set('views', './views');
app.set('view engine', 'ejs');
//exportando este endereço do app, para ser importado en quanquer arquivo usando "require()"
module.exports = app;

