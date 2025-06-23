const wordsArray = ["search", "online", "people", "health", "should", "system", "policy", "number", "please", "rights", "public",
                    "school", "review", "united", "center", "travel", "report", "member", "before", "hotels", "office", "design", 
                    "posted", "within", "states", "family", "prices", "sports", "counts", "access", "change", "rating", "during", 
                    "return", "events", "little", "movies", "source", "author", "around", "course", "canada", "credit", "estate", 
                    "select", "photos", "thread", "market", "really", "action", "series", "second", "forums", "better", 'friend', 
                    "server", "issues", "street", "things", "person", "mobile", "offers", "recent", "stores", "memory", "social", 
                    "august", "create", "single", 'latest', "status", "browse", "seller", "always", "result", "groups", "making", 
                    "future", 'london', "become", "garden", "listed", "energy", "images", "notice", "others", "format", "months", 
                    "safety", "having", "common", "living", "called", "period", "window", "france", 'region', "island", "record", 
                    "direct", "action", "public", "office", "supply", "future", "global", "health", "impact", "issues", "market", 
                    "policy", "region", "report", "school", "system", "travel", "access", "change", "design", "energy", "family", 
                    "forum", "group", "image", "member", "notice", "online", "people", "price", "rating", "review", "seller",
                    "server", "status", "video", "world", "years", "youth"];
                    
const input = document.querySelector("#word-label");
const messageElement = document.getElementById("message");

function scrambled_word(randomWord) {
  let characters = randomWord.split(/(?!$)/u);
  var i, j, k
  for (i = 0; i < characters.length - 1; i++) {
    j = Math.floor(Math.random() * i);
    k = characters[i];
    characters[i] = characters[j];
    characters[j] = k;
  }

  scrambledWord = characters.join('');
  return scrambledWord;
}

function checkWord() {
  var userInput = input.value;
  if (userInput !== null) {
    console.log(userInput.value);
  } else {
    console.error('Element not found');
  } 

  if (userInput.toLowerCase() === randomWord.toLowerCase()) {
    messageElement.innerText = "Correct! The word is: " + randomWord;
    messageElement.style.color = "green";
  } else {
    messageElement.innerText = "Incorrect! Try again.";
    messageElement.style.color = "red";
  }
}

function resetGame() {
  var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length + 1)];
  document.getElementById("scrambled-word").innerText = scrambled_word(randomWord);
  input.value = '';
  messageElement.innerText = '';
}

var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length + 1)];
document.getElementById("scrambled-word").innerText = scrambled_word(randomWord);
let txt = document.getElementById("scrambled-word"); 
txt.style.textAlign = "center";