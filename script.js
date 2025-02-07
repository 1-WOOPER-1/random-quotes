const quotes = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quo.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum adipisci rerum laudantium? Iure!",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima cum ratione quo officia aspernatur soluta veniam! Aspernatur, cum facere?",
];

const output = document.getElementById("output");
const button = document.getElementById("generate-button");

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  output.textContent = randomQuote;
};

button.addEventListener("click", generateRandomQuote);

// generateRandomQuote();
