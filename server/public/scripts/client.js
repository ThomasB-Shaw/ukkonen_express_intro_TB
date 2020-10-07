


console.log('Hello from JS');

$(document).ready(onReady);

function onReady() {
    console.log('Hello from Jquery')
    getRandomeQuote();
} // End of onReady

function getRandomeQuote() {
    console.log('Hello from random')
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){
        console.log('response', response);
        appendToDom(response);
    });

} // End of getRandomeQuote function


function appendToDom(dataToAppend) {
    // take response fromt he server and append to div "output"
    let el = $('#output');
    el.empty();

    el.append(`
    <h2>${dataToAppend.quote}</h2>
    <h3>${dataToAppend.author}</h3>
    `);
} // End of appendToDom function

