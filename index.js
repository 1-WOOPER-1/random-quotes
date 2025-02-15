import quotes from "./src/quotes.js";
import { generateRandomInt } from "./src/utils.js";
import {
  hideFavoutireCard,
  showFavoutiteCard,
  toggleFavouriteIcon,
} from "./src/favoritesHandler.js";

const quoteParagraph = document.getElementById("quote");
const quoteAuthorParagraph = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavouriteBtn = document.getElementById("favourite-btn");
const favouritesContainer = document.getElementById("favourites-container");

let currentQuoteIndex;
let favouriteQuoteFlag = false;

const generateRandomQuote = () => {
  const randomIndex = generateRandomInt(quote.length);
  const { quote, author, isFavourite } = quotes[randomIndex];
  currentQuoteIndex = randomIndex;
  quoteParagraph.innerHTML = quote;
  quoteAuthorParagraph.innerHTML = author;
  toggleFavouriteIcon(isFavourite, toggleFavouriteBtn);

  toggleFavouriteBtn.style.display = "inline-block";
};

const toggleFavourite = () => {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavouriteIcon(currentQuote.isFavourite, toggleFavouriteBtn);

  if (currentQuote.isFavourite) {
    showFavoutiteCard(
      currentQuote.quote,
      currentQuote.author,
      favouritesContainer
    );
  } else {
    hideFavoutireCard(currentQuote.quote);
  }
};

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavouriteBtn.addEventListener("click", toggleFavourite);
