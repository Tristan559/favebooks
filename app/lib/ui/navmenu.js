function NavMenu(navWindow, navIndex)
{
	this.navWindow = navWindow;
	this.navIndex = navIndex;
}

NavMenu.prototype.openView = function(view)
{
    if (OS_IOS) 
    {
        this.navWindow.openWindow(view);
    }
    if (OS_ANDROID) 
    {
        view.open();
    }
};

NavMenu.prototype.open = function()
{
	if(OS_IOS) 
	{ 
	   this.navWindow.open();
	} 
	if (OS_ANDROID) 
	{ 
	   this.navIndex.open(); 
	}
};

module.exports = NavMenu;
