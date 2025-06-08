import {
  toggleFavouriteCard,
  hideFavouriteBtn,
  showFavoutiteCard,
  showFavouriteBtn,
  removeFavouriteCard,
} from "./src/handlers/favorites.js";
import { displayCurrentQuote } from "./src/handlers/currentQuote.js";
import {
  localStorageGetItem,
  localStorageSetItem,
} from "./src/utils/localStorage.js";
import { getRandomQuote } from "./src/handlers/randomQuote.js";
import { removeObjectFromById } from "./src/utils/array.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVOURITE_QUOTES_KEY = "favouriteQuotes";

const randomQuoteBtn = document.getElementById("random-quote-btn");
const quoteFavouriteBtn = document.getElementById("quote-favourite-btn");
const favouritesContainer = document.getElementById("favourites-container");

let currentQuote = null;
const favouriteQuotes = [];

const removeFavouriteQuote = (id) => {
  if (id === currentQuote.id) {
    toggleCurrentQuote();
  } else {
    removeObjectFromById(favouriteQuotes, id);
    removeFavouriteCard(id);
    localStorageSetItem(FAVOURITE_QUOTES_KEY, favouriteQuotes);
  }

  // const currentQuote = document.querySelector("[data-current-quote-id]");
  // const currentQuoteId = currentQuote.dataset.currentQuoteId;
};

const toggleCurrentQuote = () => {
  currentQuote.isFavourite = !currentQuote.isFavourite;
  showFavouriteBtn(currentQuote.isFavourite);
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

  if (currentQuote.isFavourite) {
    favouriteQuotes.push({ ...currentQuote });
  } else {
    removeObjectFromById(favouriteQuotes, currentQuote.id);
  }

  toggleFavouriteCard(currentQuote, favouritesContainer);

  localStorageSetItem(FAVOURITE_QUOTES_KEY, favouriteQuotes);
};

const setCurrentQuote = (quote) => {
  currentQuote = { ...quote };
  currentQuote.isFavourite = !!favouriteQuotes.find(
    (favouriteQuote) => favouriteQuote.id === currentQuote.id
  );
  displayCurrentQuote(currentQuote);
  showFavouriteBtn(currentQuote.isFavourite);
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
};

hideFavouriteBtn();
quoteFavouriteBtn.addEventListener("click", toggleCurrentQuote);

randomQuoteBtn.addEventListener("click", () =>
  setCurrentQuote(getRandomQuote())
);

const init = () => {
  const favouriteQuotesFromStorage = localStorageGetItem(FAVOURITE_QUOTES_KEY);
  if (favouriteQuotesFromStorage) {
    favouriteQuotesFromStorage.forEach((quote) => {
      favouriteQuotes.push(quote);
      showFavoutiteCard(quote, favouritesContainer);
    });
  }

  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    setCurrentQuote(currentQuoteFromStorage);
  }
};

window.addEventListener("load", init);

export { quoteFavouriteBtn, removeFavouriteQuote };
