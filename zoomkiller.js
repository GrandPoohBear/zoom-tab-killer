chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.tabs.remove(details.tabId, () => {});
}, {url: [{urlMatches : 'https://zoom.us/postattendee'}]});

chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.tabs.remove(details.tabId, () => {});
}, {url: [{hostEquals : 'zoom.us', queryPrefix: 'status=success'}]});