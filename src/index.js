import $ from 'jquery'

$(document).ready(() => {
  // fetch API for the top word
  // update value of id with return of fetch
  $.get("https://wordwatch-api.herokuapp.com/api/v1/top_word", function(data, status){
      let topWord = Object.keys(data.word)[0]
      let topWordCount = data.word[topWord]

      $("#fetch-top-word").text(topWord + ": " + topWordCount);
    });

  // Add event listener to button
  document.getElementById("add-word").addEventListener("click", addWord);
});

function addWord() {
  // Find word from text input
  let word = $("#new-word").val()

  // POST #new-text to API
  let body = { "word": { "value": word } }

  $.post("https://wordwatch-api.herokuapp.com/api/v1/words", body, function(data, status){
    alert(data.message)
  })
}
