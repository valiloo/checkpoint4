const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password : 'Nojo24ak',
database :  'checkpoint4', // le nom de la base de données
});
module.exports = connection;