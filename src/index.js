import $ from 'jquery'

$(document).ready(() => {
  // have fun!

  // This code runs when the document is ready

  // fetch API for the top word
  // update value of id with return of fetch
  $.get("https://wordwatch-api.herokuapp.com/api/v1/top_word", function(data, status){
      let topWord = Object.keys(data.word)[0]
      let topWordCount = data.word[topWord]

      $("#fetch-top-word").text(topWord + ": " + topWordCount);
    });
});
