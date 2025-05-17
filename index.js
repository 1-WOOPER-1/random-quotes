import quotes from "./src/data/quotes.js";
import { toggleFavourite, hideFavouriteBtn } from "./src/handlers/favorites.js";
import { handleQuote } from "./src/handlers/quote.js";

let currentQuote = null;

const setCurrentQuote = (quote) => {
  currentQuote = quote;
};

const favouritesContainer = document.getElementById("favourites-container");
const quoteFavouriteBtn = document.getElementById("quote-favourite-btn");
hideFavouriteBtn();
quoteFavouriteBtn.addEventListener("click", () =>
  toggleFavourite(currentQuote, quoteFavouriteBtn, favouritesContainer)
);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote)
);

export { quoteFavouriteBtn };
