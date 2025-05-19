import { generateRandomInt } from "../utils/math.js";
import { handleFavourite } from "./favorites.js";

const handleQuote = (quotes, setCurrentQuote) => {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
};

const displayQuote = (quote) => {
  const { id, text, author, isFavourite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
  handleFavourite(isFavourite);
};

const chooseRandomQuote = (quotes) => {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
};

export { handleQuote };
