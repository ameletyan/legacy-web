// NOT IN USE YET

var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'legacy-web'
});

getNodes() {
	mysql.query('SELECT * FROM nodes', function(rows){
		console.log(rows);
	});	
};

export function getNodes();