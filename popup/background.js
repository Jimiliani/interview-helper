function formatRow(inner) {
    return `
    <tr>
    ${inner}
    </tr>
    `
}

function formatColumns(title, description, rating) {
    return `
    <th>${title}</th>
    <th>${description}</th>
    <th>${rating}</th>
    `
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let newInnerHTML = ""
    console.log("background job selected text 1: " + request.data);
    newInnerHTML = formatRow(formatColumns("Название", "Описание", "Рейтинг"))
    console.log("background job selected text 2: " + request.data);
    console.log(newInnerHTML);
    console.log("background job selected text 3: " + request.data);
    document.querySelector(".results-table").innerHTML = newInnerHTML
    sendResponse()
});
