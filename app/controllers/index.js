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
	
	var bookView = Alloy.createController("bookDetails", args).getView();
	bookView.open();
}

// Open main window
$.index.open(); 

