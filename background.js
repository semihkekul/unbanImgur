
var host  = "https://proxy.duckduckgo.com/iu/?u="
// find if it is an imgur image aweb page and redirect using duckduck go
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         urlArray = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);
         var res = urlArray[0].split(":");
         console.log(urlArray[0])
         return {redirectUrl: host + urlArray[0]};
       
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