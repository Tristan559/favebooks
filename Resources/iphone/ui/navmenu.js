function NavMenu(navWindow, navIndex) {
    this.navWindow = navWindow;
    this.navIndex = navIndex;
}

NavMenu.prototype.openView = function(view) {
    this.navWindow.openWindow(view);
};

NavMenu.prototype.open = function() {
    this.navWindow.open();
};

module.exports = NavMenu;