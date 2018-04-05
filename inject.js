let s = document.createElement('script');
s.src = chrome.extension.getURL('consoleTalk.js');
s.onload = function () {
    this.remove();
};

(document.head || document.documentElement).appendChild(s);


let l = document.createElement('script');
l.src = chrome.extension.getURL('consoleQuiet.js');
l.onload = function () {
    this.remove();
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.on === true) {
        (document.head || document.documentElement).appendChild(s);
    } else {
        console.log('turn off');
        (document.head || document.documentElement).appendChild(l);
    }
});