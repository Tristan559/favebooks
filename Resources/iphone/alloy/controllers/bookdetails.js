function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookdetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.bookdetails = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "bookdetails"
    });
    $.__views.bookdetails && $.addTopLevelView($.__views.bookdetails);
    $.__views.titleLabel = Ti.UI.createLabel({
        id: "titleLabel"
    });
    $.__views.bookdetails.add($.__views.titleLabel);
    $.__views.authorLabel = Ti.UI.createLabel({
        id: "authorLabel"
    });
    $.__views.bookdetails.add($.__views.authorLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title || "Default Title";
    $.authorLabel.text = args.author || "Default Author";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;