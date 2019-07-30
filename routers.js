var express = require('express');
const app = require('./app');
var myRouter = express.Router();
//==================================================================================================
//GET
myRouter.route('/')
  .get(function (req, res) {
    res.render('pages/home', { title: "Home page" })
  })

myRouter.route('/home')
  .get((req, res) => {
    res.render('pages/home', { title: "About page" })
  })
//=====================
myRouter.route('/about')
  .get((req, res) => {
    res.render('pages/about', { title: "About" })
  })

module.exports = myRouter; //exportr o endereço deste objeto para ser acessado no outros arquivos
