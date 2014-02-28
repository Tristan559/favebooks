var myBooks = Alloy.Collections.books;

function addBookToCollection()
{
    var book = Alloy.createModel('books', {
        title : $.titleInput.value,
        author : $.authorInput.value
    });
    
    myBooks.add(book);
    book.save();
    
    // Close the window.
    $.addbook.close();	
}


