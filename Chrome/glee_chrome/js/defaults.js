// These are methods called by db.js when initializing tables to get default options

function getDefaultPreferences(){
	var prefs = {
		size: 1,
		position: 2,
		status: 1,
		search_engine: "http://www.google.com/search?q=",
		theme: "GleeThemeDefault",
		bookmark_search: 0,
		scroll_animation: 1,
		tab_shortcut_status: 1,
		esp_status: 1,
		shortcut_key: 71,
		tab_shortcut_key: 190,
        hyper: 0
	};
	return prefs;
}

function getDefaultDisabledUrls(){
	return ["mail.google.com", "wave.google.com", "mail.yahoo.com"];
}

function getDefaultESP(){
	var esp = [
	{
		url: "google.com/search",
		selector: "h3:not(ol.nobr>li>h3),a:contains(Next)"
	},
	{
		url: "bing.com/search",
		selector: "div.sb_tlst"
	}];
	
	return esp;
}