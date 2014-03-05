// module requires
var NavMenu = require('ui/navmenu');
var navMenu = new NavMenu($.navGroupWin || null, $.index || null);

// config
var appConfig = {
	menu :
	{
		slideDuration : 150
	}	
};

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
    { id: 1, title: "Crafting", image: "/images/phone.png" },
    { id: 2, title: "Potions", image: "/images/gear.png" },
    { id: 3, title: "Enchanting", image: "/images/gear.png" },
    { id: 4, title: "Biomes", image: "/images/gear.png" },
    { id: 5, title: "Commands", image: "/images/gear.png" },
    { id: 6, title: "Items", image: "/images/gear.png" },
    { id: 7, title: "Game Modes", image: "/images/gear.png" },
    { id: 8, title: "Update notes", image: "/images/gear.png" }
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
        duration: appConfig.menu.slideDuration,
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
}

function closeMenu() {
    $.AppWrapper.animate({
        left: "0dp",
        duration: appConfig.menu.slideDuration,
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
