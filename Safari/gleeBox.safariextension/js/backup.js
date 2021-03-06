function exportSettings() {
    var text = 'Copy the contents of this text field, and save them to a file for backup.';
    showBackupPopup(text, false);
    $("#settingsText").text(translateForExport(prefs));
}

function importSettings() {
    var text = 'Paste exported settings here.';
    showBackupPopup(text, true);
    $("#settingsText").text('');
}

// called when import button is clicked
function importAndApply() {
    try{
        var jsonString = $('#settingsText')[0].value;
        var tempPref = translateForImport(JSON.parse(jsonString));
        clearSettings();
        initSettings(tempPref);
        $('#backupInfo').text("Settings successfully imported!");
        hideBackupPopup();
    }
    catch(e) {
        $('#backupInfo').text("The import format is incorrect!");
        $('#settingsText')[0].focus();
    }
}

// Unfortunately, since Chrome version of gleeBox uses different variable names / values for certain preferences,
// we have to translate those values here to maintain compatibility. 

// A day will come when they will have the same variable names / values

function translateForExport(prefs) {
    var newPrefs = {};
    
    // position
    if(prefs.position == "top")
        newPrefs.position = "0";
    else if(prefs.position == "middle")
        newPrefs.position = "1";
    else
        newPrefs.position = "2";
    
    // size
    if(prefs.size == "small")
        newPrefs.size = "0";
    else if(prefs.size == "large")
        newPrefs.size = "2";
    else
        newPrefs.size = "1";

    // scrolling speed
    newPrefs.scroll_animation = (prefs.scrollingSpeed == 500) ? "1" : "0";
    
    // shortcut key
    newPrefs.shortcut_key = prefs.shortcutKey;
    
    // search engine url
    newPrefs.search_engine = prefs.searchEngineUrl;
    
    // esp status
    newPrefs.esp_status = prefs.espStatus;
    
    // everything else
    newPrefs.disabledUrls = prefs.disabledUrls;
    newPrefs.espModifiers = prefs.espModifiers;
    newPrefs.scrapers = prefs.scrapers;
    newPrefs.theme = prefs.theme;
    
    return JSON.stringify(newPrefs);
}

function translateForImport(importPrefs) {
    var newPrefs = {};
    
    // position
    if(importPrefs.position == 0)
        newPrefs.position = "top";
    else if(importPrefs.position == 1)
        newPrefs.position = "middle";
    else
        newPrefs.position = "bottom";
    
    // size
    if(importPrefs.size == 0)
        newPrefs.size = "small";
    else if(importPrefs.size == 2)
        newPrefs.size = "large";
    else
        newPrefs.size = "medium";
    
    // scrolling speed
    newPrefs.scrollingSpeed = (importPrefs.scroll_animation == 0) ? 0 : 500;

    // shortcut key
    newPrefs.shortcutKey = importPrefs.shortcut_key;

    // search engine url
    newPrefs.searchEngineUrl = importPrefs.search_engine;

    // esp status
    newPrefs.espStatus = importPrefs.esp_status;

    // everything else
    newPrefs.disabledUrls = importPrefs.disabledUrls;
    newPrefs.espModifiers = importPrefs.espModifiers;
    newPrefs.scrapers = importPrefs.scrapers;
    newPrefs.theme = importPrefs.theme;
    
    return newPrefs;
}