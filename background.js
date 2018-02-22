//var host = "https://images.duckduckgo.com/iu/?u=https://i.imgur.com";
var host  = "https://proxy.duckduckgo.com/iu/?u="
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         urlArray = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);
         var res = urlArray[0].split(":");
         return {redirectUrl: host + urlArray[0]};
        // return chrome.tabs.create({ url: host + urlArray[0] });
    },
    {
        urls: [
            "https://imgur.com/*",
            "http://imgur.com/*",
            "https://www.imgur.com/*",
            "http://www.imgur.com/*",
            "http://i.imgur.com/*",
            "https://i.imgur.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);