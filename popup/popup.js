console.log("Open popup page")

function formatHTML(inner) {
    return `
    <tr>
    ${inner}
    </tr>
    `
}

function formatRow(title, description, rating) {
    return `
    <th>${title}</th>
    <th>${description}</th>
    <th>${rating}</th>
    `
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    let newInnerHTML = ""
    console.log("background job selected text: " + message.data);
    newInnerHTML = formatHTML(formatRow("Название", "Описание", "Рейтинг"))
    document.querySelector(".results-table").innerHTML = newInnerHTML
    sendResponse()
});