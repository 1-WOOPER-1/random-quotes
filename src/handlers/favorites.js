import { quoteFavouriteBtn } from "../../index.js";

const toggleFavourite = (quote, btn, container) => {
  quote.isFavourite = !quote.isFavourite;
  toggleFavouriteBtnIcon(quote.isFavourite, btn);

  if (quote.isFavourite) {
    showFavoutiteCard(quote, container);
  } else {
    removeFavouriteCard(quote.id);
  }
};

const handleFavourite = (isFavourite) => {
  showFavouriteBtn(quoteFavouriteBtn);
  toggleFavouriteBtnIcon(isFavourite, quoteFavouriteBtn);
};

const toggleFavouriteBtnIcon = (isFavourite) => {
  quoteFavouriteBtn.classList.toggle("fa-solid", isFavourite);
  quoteFavouriteBtn.classList.toggle("fa-regular", !isFavourite);
};

const showFavouriteBtn = () => {
  quoteFavouriteBtn.style.display = "inline-block";
};

const hideFavouriteBtn = () => {
  quoteFavouriteBtn.style.display = "none";
};

const removeFavouriteQuote = (quote) => {
  quote.isFavourite = false;
  removeFavouriteCard(quote.id);
  const currentQuote = document.querySelector("[data-current-quote-id]");
  const currentQuoteId = currentQuote.dataset.currentQuoteId;
  if (quote.id === currentQuoteId) {
    toggleFavouriteBtnIcon(quote.isFavourite);
  }
};

const showFavoutiteCard = (quote, container) => {
  const { id, text, author } = quote;
  const favouriteCard = document.createElement("div");
  favouriteCard.classList.add("favourite-card");
  favouriteCard.classList.add("card");
  favouriteCard.dataset.favouriteQuoteId = id;
  favouriteCard.innerHTML = `
      <p class="fs-5">${text}</p>
      <p class="author-text fs-6">${author}</p>
      <button class="remove-favourite-btn"><i class="fa-solid fa-trash"></i> Remove</button>
      `;
  container.appendChild(favouriteCard);
  const removeBtn = favouriteCard.querySelector(".remove-favourite-btn");
  removeBtn.addEventListener("click", () => removeFavouriteQuote(quote));
};

const removeFavouriteCard = (id) => {
  const card = document.querySelector(`[data-favourite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
};

export { handleFavourite, toggleFavourite, hideFavouriteBtn };
