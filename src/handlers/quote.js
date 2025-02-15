import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils.js";
import { handleFavourite } from "./favorites.js";

let currentQuote = null;

const generateAndDisplayRandomQuote = () => {
  const randomQuote = chooseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
};

const displayQuote = (quote) => {
  const { text, author, isFavourite } = quote;
  const quoteParagraph = document.getElementById("quote");
  const quoteAuthorParagraph = document.getElementById("quote-author");
  quoteParagraph.innerHTML = text;
  quoteAuthorParagraph.innerHTML = author;
  handleFavourite(isFavourite);
};

const chooseRandomQuote = (quotes) => {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
};

export { generateAndDisplayRandomQuote, currentQuote };
