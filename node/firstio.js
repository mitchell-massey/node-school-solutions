var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, data) {
	if (err) throw err;
	var array = data.toString().split("\n");

	var count = array.length-1;

	console.log(count);
});
