function NavMenu(navWindow, navIndex) {
    this.navWindow = navWindow;
    this.navIndex = navIndex;
}

NavMenu.prototype.openView = function(view) {
    view.open();
};

NavMenu.prototype.open = function() {
    this.navIndex.open();
};

module.exports = NavMenu;