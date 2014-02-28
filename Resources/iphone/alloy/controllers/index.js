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
                title: "undefined" != typeof __alloyId5.__transform["title"] ? __alloyId5.__transform["title"] : __alloyId5.get("title"),
                author: "undefined" != typeof __alloyId5.__transform["author"] ? __alloyId5.__transform["author"] : __alloyId5.get("author")
            });
            rows.push(__alloyId7);
            showBook ? __alloyId7.addEventListener("click", showBook) : __defers["__alloyId7!click!showBook"] = true;
        }
        $.__views.__alloyId4.setData(rows);
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author
        };
        var bookView = Alloy.createController("bookdetails", args).getView();
        $.navGroupWin.openWindow(bookView);
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
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId3"
    });
    $.__views.__alloyId4 = Ti.UI.createTableView({
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    var __alloyId8 = Alloy.Collections["books"] || books;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId3,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    var book = Alloy.createModel("books", {
        title: "Great Expectations",
        author: "Charles Dickens"
    });
    myBooks.add(book);
    book.save();
    $.navGroupWin.open();
    __defers["__alloyId7!click!showBook"] && __alloyId7.addEventListener("click", showBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;