const app = require('./app')//para o uso da variavel "app"
const myRouter = require('./routers')//para o uso da variavel "myRouter"
var hostname = 'localhost';
var port = process.env.PORT || 3000;
// Nous demandons à l'application d'utiliser notre routeur
// Démarrer le serveur 
app.use(myRouter);
app.listen(port, hostname, function () {
  console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});
