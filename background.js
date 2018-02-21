var host = "https://images.duckduckgo.com/iu/?u=https://i.imgur.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]+".jpg"};
    },
    {
        urls: [
            "*://imgur.com/*",
            "*://www.imgur.com/*",
            "*://i.imgur.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);