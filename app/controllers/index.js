// module requires
var NavMenu = require('ui/navmenu');
var navMenu = new NavMenu($.navGroupWin || null, $.index || null);

// get books collection
var myBooks = Alloy.Collections.books;

// create book record
var book = Alloy.createModel('books', {
	title : 'Great Expectations',
	author : 'Charles Dickens'
});

// add new book record to collection
myBooks.add(book);

// save book record
book.save();

function showBook(event)
{
	var selectedBook = event.source;
	var args = {
		title : selectedBook.title,
		author : selectedBook.author
	};
	
	var bookView = Alloy.createController("bookdetails", args).getView();
	navMenu.openView(bookView);
}

function addBook()
{
    var addBookView = Alloy.createController("addbook",{}).getView();
	navMenu.openView(addBookView);
}

// Open main window
navMenu.open();
