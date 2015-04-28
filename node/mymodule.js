function mymodule(dir, ext, callback) {
	fs.readdir(dir, function (err, files){
		if(err) {
			callback(err,null);
		}

		else() {
			filesList = [];
			files.forEach(function(file) {
				if(path.extname(file) === '.' + ext) {
					filesList.push(file);
				};
			});
		};
	});
};

	


