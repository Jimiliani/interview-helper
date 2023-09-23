console.log("Open popup page")

const URL = "http://127.0.0.1:8000?"

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
    let newInnerHTML = formatRow(formatColumns("Название", "Описание", "Рейтинг"))
    let similarProblems
    console.log("selected text: " + request.data);

    fetch(URL + "text=" + request.data)
        .then(response => {
            // Check if the response status is OK (status code 200)
            if (response.status === 200) {
                // Parse the response body as JSON
                return response.json();
            } else {
                // Handle the error if the status code is not 200
                throw new Error('Failed to fetch data');
            }
        })
        .then(data => {
            // Log the data to the console
            console.log("response: " + data);
            similarProblems = data.response

            for (const similarProblem of similarProblems) {
                newInnerHTML += formatRow(formatColumns(similarProblem["name"], similarProblem["description"], similarProblem["rating"]))
            }
            console.log("newInnerHTML: " + newInnerHTML);
            document.querySelector(".results-table").innerHTML = newInnerHTML
        })
        .catch(error => {
            // Log any errors to the console
            console.error(error);
        });

    sendResponse()
    console.log("—————————————————————————————————————");
});