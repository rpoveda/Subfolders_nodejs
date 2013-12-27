var fs 	 = require('fs'),
	dirs = [],
	path = "C:\\Temp";

var search_dirs = function(this_path){
	var folders = fs.readdirSync(this_path);

	if (folders.length != 0){
		for(var folder in folders){
			var this_folder = fs.statSync(this_path + '\\' + folders[folder]);

			if(this_folder.isDirectory()){
				dirs.push(this_path + '\\' + folders[folder]);
				search_dirs(this_path + '\\' + folders[folder]);
			}
		}
	}
	return;
}

var init = function(){
	var folders = fs.readdirSync(path);

	for(var folder in folders){
		var this_folder = fs.statSync(path + '\\' + folders[folder]);

		if(this_folder.isDirectory())
		{
			dirs.push(path + '\\' + folders);
			search_dirs(path + '\\' + folders[folder]);
		}
	}

	console.log("Folders total => " + dirs.length);
}

init();