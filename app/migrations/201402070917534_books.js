var preload_data = [
	{title: 'To Kill a Mockingbird', author:'Harper Lee'},
	{title: 'The Catcher in the Rye', author:'J. D. Salinger'},
	{title: 'Of Mice and Men', author:'John Steinbeck'},
	{title: 'Lord of the Flies', author:'William Golding'},
	{title: 'The Great Gatsby', author:'F. Scott Fitzgerald'},
	{title: 'Animal Farm', author:'George Orwell'}
];

migration.up = function(db) 
{
    db.createTable({
        "columns":
        {
			"id" : "INTEGER PRIMARY KEY AUTOINCREMENT",        	
            "title": "TEXT",
            "author": "TEXT"
        }
    });
    for (var i = 0; i < preload_data.length; i++) { 
	    db.insertRow(preload_data[i]);
    }
};

migration.down = function(db) {
    db.dropTable();
};
