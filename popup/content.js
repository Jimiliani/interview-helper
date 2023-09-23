document.addEventListener("mouseup", function (event) {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        console.log(selectedText)
        chrome.runtime.sendMessage({ data: selectedText });
    }
});
