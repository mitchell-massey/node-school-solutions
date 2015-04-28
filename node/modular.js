var fs = require('fs');
var path = require('path');
var mymodule = require("./mymodule.js");


var file = mymodule(process.argv[2], process.argv[3], function callback (err, list) {
	if (!err) {
		list.forEach(function(file, i) { 
			console.log(file);
	});
};

