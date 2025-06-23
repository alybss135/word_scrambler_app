const wordsArray = ["contact", "service", "product", "support", "message", "through", "privacy", "company", "general", "january", 
                    "reviews", "program", "details", "because", "results", "address", "subject", "between", "special", "project", 
                    "version", "section", "related", "members", "network", "systems", "without", "current", "control", "history", 
                    "account", "digital", "profile", "another", "quality", "listing", "content", "country", "private", "compare", 
                    "include", "college", "article", "provide", "process", "science", "english", "windows", "gallery", "however", 
                    "october", "library", "medical", "looking", "comment", "working", "against", "payment", "student", "problem", 
                    "options", "america", "example", "changes", "release", "request", "picture", "meeting", "similar", "schools", 
                    "million", "popular", "stories", "journal", "reports", "central", "council", "archive", "society", "friends", 
                    "edition", 'further', 'updated', 'already', "studies", "several", "display", "limited", "powered", "natural", 
                    "whether", "average", "records", "present", "written", "federal", "hosting", "tickets", "finance", "minutes"];

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