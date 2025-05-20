import { generateRandomInt } from "../utils/math.js";
import { handleFavourite } from "./favorites.js";

const handleQuote = (quotes, favouriteQuotes, setCurrentQuote) => {
  const randomQuote = chooseRandomQuote(quotes);
  if (favouriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavourite = true;
  }
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

const findQuoteById = (quotes, id) => {
  return quotes.find((quote) => quote.id === id);
};

export { handleQuote, displayQuote, findQuoteById };
