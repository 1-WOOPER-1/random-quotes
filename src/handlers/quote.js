import { generateRandomInt } from "../utils.js";
import { handleFavourite } from "./favorites.js";

const handleQuote = (quotes, setCurrentQuote) => {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
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

export { handleQuote };
