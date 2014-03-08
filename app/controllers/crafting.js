var args = arguments[0] || {};

//$.crafting_gui_img.addEventListener('postlayout', craftingOnPostLayout);
//Ti.API.info('crafting image postLayout added');

function craftingOnPostLayout()
{
	var size = $.crafting_gui_img.size;
	Ti.API.info('crafting image size = ' + size.width + ', ' + size.height);
	
	if (0)
	{
		var size = $.crafting_gui_img.size;
		Ti.API.info('crafting image size = ' + size.width + ', ' + size.height);
		var ratio = size.width / 256;
		$.crafting_gui_img.applyProperties({
			width: ratio * 256,
			height: ratio * 132
		});
		$.crafting_gui_img.removeEventListener('postlayout', craftingOnPostLayout);
	}
}
