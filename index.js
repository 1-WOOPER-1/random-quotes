import quotes from "./src/data/quotes.js";
import {
  toggleFavourite,
  hideFavouriteBtn,
  showFavoutiteCard,
} from "./src/handlers/favorites.js";
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from "./src/handlers/quote.js";
import {
  localStorageGetItem,
  localStorageSetItem,
} from "./src/utils/localStorage.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVOURITE_QUOTES_KEY = "favouriteQuotes";
let currentQuote = null;
const favouriteQuotes = [];

const setCurrentQuote = (quote, shouldToggleIsFavourite = false) => {
  if (shouldToggleIsFavourite) {
    quote.isFavourite = !quote.isFavourite;
    if (quote.isFavourite) {
      favouriteQuotes.push({ ...quote });
    } else {
      const index = favouriteQuotes.findIndex(
        (favouriteQuote) => favouriteQuote.id === quote.id
      );
      if (index !== -1) {
        favouriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem(FAVOURITE_QUOTES_KEY, favouriteQuotes);
  }
  currentQuote = quote;
  localStorageSetItem(CURRENT_QUOTE_KEY, quote);
};

const favouritesContainer = document.getElementById("favourites-container");
const quoteFavouriteBtn = document.getElementById("quote-favourite-btn");
hideFavouriteBtn();
quoteFavouriteBtn.addEventListener("click", () =>
  toggleFavourite(
    currentQuote,
    setCurrentQuote,
    quoteFavouriteBtn,
    favouritesContainer
  )
);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, favouriteQuotes, setCurrentQuote)
);

const init = () => {
  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
    quote.isFavourite = currentQuoteFromStorage.isFavourite;
    currentQuote = quote;
  }

  const favouriteQuotesFromStorage = localStorageGetItem(FAVOURITE_QUOTES_KEY);
  favouriteQuotesFromStorage.forEach((quote) => {
    favouriteQuotes.push(quote);
    showFavoutiteCard(quote, setCurrentQuote, favouritesContainer);
  });
};

window.addEventListener("load", init);

export { quoteFavouriteBtn };
