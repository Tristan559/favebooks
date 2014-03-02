function Controller() {
    function __alloyId10(e) {
        if (e && e.fromAdapter) return;
        __alloyId10.opts || {};
        var models = __alloyId9.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId8 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId6.__transform["title"] ? __alloyId6.__transform["title"] : __alloyId6.get("title"),
                author: "undefined" != typeof __alloyId6.__transform["author"] ? __alloyId6.__transform["author"] : __alloyId6.get("author")
            });
            rows.push(__alloyId8);
            showBook ? __alloyId8.addEventListener("click", showBook) : __defers["__alloyId8!click!showBook"] = true;
        }
        $.__views.__alloyId5.setData(rows);
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author
        };
        var bookView = Alloy.createController("bookdetails", args).getView();
        navMenu.openView(bookView);
    }
    function addBook() {
        var addBookView = Alloy.createController("addbook", {}).getView();
        navMenu.openView(addBookView);
    }
    function handleMenuClick(_event) {
        "undefined" != typeof _event.row.id && openScreen(_event.row.id);
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("books");
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId4"
    });
    $.__views.SlideMenu = Alloy.createWidget("com.mcongrove.slideMenu", "widget", {
        id: "SlideMenu",
        __parentSymbol: $.__views.__alloyId4
    });
    $.__views.SlideMenu.setParent($.__views.__alloyId4);
    $.__views.AppWrapper = Ti.UI.createView({
        id: "AppWrapper"
    });
    $.__views.__alloyId4.add($.__views.AppWrapper);
    $.__views.__alloyId5 = Ti.UI.createTableView({
        id: "__alloyId5"
    });
    $.__views.AppWrapper.add($.__views.__alloyId5);
    var __alloyId9 = Alloy.Collections["books"] || books;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    var __alloyId13 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Add book"
    });
    __alloyId13.push($.__views.add);
    addBook ? $.__views.add.addEventListener("click", addBook) : __defers["$.__views.add!click!addBook"] = true;
    $.__views.__alloyId11 = Ti.UI.iOS.createToolbar({
        items: __alloyId13,
        bottom: "0",
        id: "__alloyId11"
    });
    $.__views.__alloyId4.add($.__views.__alloyId11);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId4,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
    };
    _.extend($, $.__views);
    var NavMenu = require("ui/navmenu");
    var navMenu = new NavMenu($.navGroupWin || null, $.index || null);
    var myBooks = Alloy.Collections.books;
    var book = Alloy.createModel("books", {
        title: "Great Expectations",
        author: "Charles Dickens"
    });
    myBooks.add(book);
    book.save();
    navMenu.open();
    var nodes = [ {
        menuHeader: "My Tabs",
        id: 0,
        title: "Home",
        image: "/images/home.png"
    }, {
        id: 1,
        title: "Contact",
        image: "/images/phone.png"
    }, {
        id: 2,
        title: "Settings",
        image: "/images/gear.png"
    } ];
    $.SlideMenu.init({
        nodes: nodes,
        color: {
            headingBackground: "#000",
            headingText: "#FFF"
        }
    });
    $.SlideMenu.setIndex(0);
    $.SlideMenu.Nodes.addEventListener("click", handleMenuClick);
    $.AppWrapper.addEventListener("swipe", function(_event) {
        "right" == _event.direction ? openMenu() : "left" == _event.direction && closeMenu();
    });
    __defers["__alloyId8!click!showBook"] && __alloyId8.addEventListener("click", showBook);
    __defers["$.__views.add!click!addBook"] && $.__views.add.addEventListener("click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;