import quotes from "./quotes.js";
console.log(quotes);

const quoteParagraph = document.getElementById("quote");
const quoteAuthorParagraph = document.getElementById("quote-author");
const button = document.getElementById("generate-button");

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];
  quoteParagraph.innerHTML = quote;
  quoteAuthorParagraph.innerHTML = author;
};

button.addEventListener("click", generateRandomQuote);
