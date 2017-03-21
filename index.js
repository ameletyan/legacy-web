var express = require('express')
var app = express()

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'legacy-web'
});

connection.connect(function(err) {
	if (err) {
		console.log('error connecting to mysql');
	} else {
		console.log('connection established');
	}
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	connection.query('SELECT * FROM nodes', function(err, rows) {
		if(err)
      response.status(500).json({"Error": err});
  	else if(rows.length)
      response.sendFile('index.html', { root: __dirname + "/view" });
  	else
      response.status(200).json({"Data": "No records found"});
	});
  // response.sendFile('index.html', { root: __dirname + "/view" });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
