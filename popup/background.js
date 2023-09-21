chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("background job");
    if (request.action === "logSelection") {
        console.log("background job selected text: " + request.text);
    }
});
