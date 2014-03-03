function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId7 = Ti.UI.createTableViewRow({
                font: {
                    fontSize: "24"
                },
                height: "40",
                title: "undefined" != typeof __alloyId5.__transform["title"] ? __alloyId5.__transform["title"] : __alloyId5.get("title"),
                author: "undefined" != typeof __alloyId5.__transform["author"] ? __alloyId5.__transform["author"] : __alloyId5.get("author")
            });
            rows.push(__alloyId7);
            showBook ? __alloyId7.addEventListener("click", showBook) : __defers["__alloyId7!click!showBook"] = true;
        }
        $.__views.__alloyId4.setData(rows);
    }
    function __alloyId12() {
        $.__views.index.removeEventListener("open", __alloyId12);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId11 = {
                title: "Add book",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
                id: "__alloyId10"
            };
            $.__views.__alloyId10 = e.menu.add(_.pick(__alloyId11, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId10.applyProperties(_.omit(__alloyId11, Alloy.Android.menuItemCreateArgs));
            addBook ? $.__views.__alloyId10.addEventListener("click", addBook) : __defers["$.__views.__alloyId10!click!addBook"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.SlideMenu = Alloy.createWidget("com.mcongrove.slideMenu", "widget", {
        id: "SlideMenu",
        __parentSymbol: $.__views.index
    });
    $.__views.SlideMenu.setParent($.__views.index);
    $.__views.AppWrapper = Ti.UI.createView({
        id: "AppWrapper"
    });
    $.__views.index.add($.__views.AppWrapper);
    $.__views.__alloyId4 = Ti.UI.createTableView({
        id: "__alloyId4"
    });
    $.__views.AppWrapper.add($.__views.__alloyId4);
    var __alloyId8 = Alloy.Collections["books"] || books;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    $.__views.index.addEventListener("open", __alloyId12);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
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
    __defers["__alloyId7!click!showBook"] && __alloyId7.addEventListener("click", showBook);
    __defers["$.__views.__alloyId10!click!addBook"] && $.__views.__alloyId10.addEventListener("click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;