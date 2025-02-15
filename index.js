import quotes from "./src/data/quotes.js";
import { toggleFavourite, hideFavouriteBtn } from "./src/handlers/favorites.js";
import { handleQuote } from "./src/handlers/quote.js";

let currentQuote = null;

const setCurrentQuote = (quote) => {
  currentQuote = quote;
};

const favouritesContainer = document.getElementById("favourites-container");
const favouriteBtn = document.getElementById("favourite-btn");
hideFavouriteBtn(favouriteBtn);
favouriteBtn.addEventListener("click", () =>
  toggleFavourite(currentQuote, favouriteBtn, favouritesContainer)
);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote)
);

export { favouriteBtn };
