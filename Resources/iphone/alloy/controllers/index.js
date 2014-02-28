function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId3.__transform["title"] ? __alloyId3.__transform["title"] : __alloyId3.get("title"),
                author: "undefined" != typeof __alloyId3.__transform["author"] ? __alloyId3.__transform["author"] : __alloyId3.get("author")
            });
            rows.push(__alloyId5);
            showBook ? __alloyId5.addEventListener("click", showBook) : __defers["__alloyId5!click!showBook"] = true;
        }
        $.__views.__alloyId2.setData(rows);
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author
        };
        var bookView = Alloy.createController("bookDetails", args).getView();
        bookView.open();
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
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    var __alloyId6 = Alloy.Collections["books"] || books;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    var book = Alloy.createModel("books", {
        title: "Great Expectations",
        author: "Charles Dickens"
    });
    myBooks.add(book);
    book.save();
    $.index.open();
    __defers["__alloyId5!click!showBook"] && __alloyId5.addEventListener("click", showBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;