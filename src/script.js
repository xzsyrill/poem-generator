function displayPoem(response) {
  let poem = document.querySelector("#poem");
  poem.innerHTML = "";

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "257842e3dd87eab0cfobda43203bt81d";
  let context =
    "You are a poetic and romantic poem expert. Write exactly 8 lines of a short poem with proper punctuation. Format the poem in basic HTML by separating each line with <br />. Do not include a title, do not add explanations, do not print the word 'html', and do not use HTML quotation marks. Respond only with the poem, clean and direct";
  let prompt = `User instructions: Generate a Filipino poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ <i>Lumilikha ng tula tungkol sa ${instructionsInput.value}<i/></div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
