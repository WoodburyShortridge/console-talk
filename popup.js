check = document.getElementById("checkbox");

check.addEventListener( 'change', function() {
    // check if checkbox is checked
    if (check.checked) {
        // if checked
        console.log('checked');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {on: true}, function(response) {});
        });
    } else {
        // if unchecked
        console.log('nope');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {on: false}, function(response) {});
        });
    }
});