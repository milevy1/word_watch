import $ from 'jquery'

$(document).ready(() => {
  // have fun!

  // This code runs when the document is ready
  // console.log("Hello Matt!");

  // fetch API for the top word
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let topWord = JSON.stringify(myJson));
    // update value of id with return of fetch
    $("#fetch-top-word").text(topWord)
  });


})
