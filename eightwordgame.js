const wordsArray = ["business", "services", "products", "software","research", "comments", "national", "internet", "shipping", 
                    "reserved", "security", "american", "computer", "download", "pictures", "personal", "location", "children", 
                    "students", "shopping", "previous", "property", "customer", "december", "training", "advanced", "category", 
                    "register", "november", "features", "industry", "provided", "required", "articles", "feedback", "complete", 
                    "standard", "programs", "language", "password", "question", "building", "february", "analysis", "possible", 
                    "problems", "interest", "learning", "delivery", "original", "includes", "messages", "provides", "specific", 
                    "director", "planning", "database", "official", "district", "calendar", "resource", "document", "material", 
                    "together", "function", "economic", "projects", "included", "received", "archives", "magazine", "policies", 
                    "position", "listings", "wireless", "purchase", "response", "practice", "hardware", "designed", "discount", 
                    "remember", "increase", "european", "activity", "although", "contents", "regional", "supplies", "exchange", 
                    "continue", "benefits", "anything", "mortgage", "solution", "addition", "clothing", "military", "decision", 
                    "division"];

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