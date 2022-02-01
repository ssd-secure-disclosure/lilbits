// When the button is clicked, we're going to send a request to the '/calculate' endpoint.
// This backend endpoint will respond with the result from our calculation.
document.getElementById("button").onclick = () => {
    // Create the url. It contains a GET parameter payload which will be the URI encoded contents of our input field.
    const url = "/calculate?payload=" + encodeURIComponent(document.getElementById("input").value)
    // Create the XMLHttpRequest
    const xmlHttp = new XMLHttpRequest();
    // We want to make a GET request to the URL and do that synchronously
    xmlHttp.open("GET", url, false);
    // We will send the request
    xmlHttp.send();
    // Update the result element with the response text
    document.getElementById("result").innerText = xmlHttp.responseText;
}
