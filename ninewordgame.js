const wordsArray = ["available", "copyright", "education", "community", "following", "resources", "including", "directory", 
                   "insurance", "different", "september", "questions", "financial", "equipment", "important", "something", 
                   "committee", "reference", "companies", "computers", "president", "australia", "agreement", "marketing", 
                   "solutions", "technical", "statement", "downloads", "subscribe", "treatment", "knowledge", "currently", 
                   "published", "corporate", "customers", "materials", "countries", "standards", "political", "advertise", 
                   "institute", "sponsored", "condition", "effective", "selection", "executive", "necessary", "according", 
                   "christmas", "furniture", "structure", "potential", "documents", "operating", "developed", "telephone", 
                   "therefore", "christian", "worldwide", "publisher", "excellent", "interface", "operation", "beautiful", 
                   "locations", "providing", "authority", "programme", "employees", "relations", "completed", "otherwise", 
                   "character", "functions", "submitted", "regarding", "increased", "beginning", "specified", "sometimes", 
                   "transport", "galleries", "presented", "secretary", "magazines", "francisco", "described", "attention", 
                   "situation", "emergency", "determine", "difficult", "satellite", "recommend", "professor", "generally", 
                   "continued", "component", "guarantee", "processes"];

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