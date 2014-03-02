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

// slide menu
// Create our node items
var nodes = [
    { menuHeader: "My Tabs", id: 0, title: "Home", image: "/images/home.png" },
    { id: 1, title: "Contact", image: "/images/phone.png" },
    { id: 2, title: "Settings", image: "/images/gear.png" }
];

// Initialize the slide menu
$.SlideMenu.init({
    nodes: nodes,
    color: {
        headingBackground: "#000",
        headingText: "#FFF"
    }
});

// Set the first node as active
$.SlideMenu.setIndex(0);

// Add an event listener on the nodes
$.SlideMenu.Nodes.addEventListener("click", handleMenuClick);

// Handle the click event on a node
function handleMenuClick(_event) {
    if(typeof _event.row.id !== "undefined") {
        // Open the corresponding controller
        openScreen(_event.row.id);
    }
}

function openMenu() {
    $.SlideMenu.Wrapper.left = "0dp";
    $.AppWrapper.animate({
        left: "200dp",
        duration: 250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
}

function closeMenu() {
    $.AppWrapper.animate({
        left: "0dp",
        duration: 250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
}

$.AppWrapper.addEventListener("swipe", function(_event) {
    if(_event.direction == "right") {
        openMenu();
    } else if(_event.direction == "left") {
        closeMenu();
    }
});
