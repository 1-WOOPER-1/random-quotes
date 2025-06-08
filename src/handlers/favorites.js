import { quoteFavouriteBtn, removeFavouriteQuote } from "../../index.js";

const toggleFavouriteCard = (quote, container) => {
  quote.isFavourite
    ? showFavoutiteCard(quote, container)
    : removeFavouriteCard(quote.id);
};

const showFavouriteBtn = (isFavourite) => {
  const btn = quoteFavouriteBtn;
  if (btn.style.display === "none") btn.style.display = "inline-block";
  btn.classList.toggle("fa-solid", isFavourite);
  btn.classList.toggle("fa-regular", !isFavourite);
};

const hideFavouriteBtn = () => {
  quoteFavouriteBtn.style.display = "none";
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
  removeBtn.addEventListener("click", () => removeFavouriteQuote(id));
};

const removeFavouriteCard = (id) => {
  const card = document.querySelector(`[data-favourite-quote-id="${id}"]`);
  if (card) card.remove();
};

export {
  toggleFavouriteCard,
  hideFavouriteBtn,
  showFavoutiteCard,
  showFavouriteBtn,
  removeFavouriteCard,
};
