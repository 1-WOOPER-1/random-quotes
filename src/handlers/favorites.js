import { favouriteBtn } from "../../index.js";

const toggleFavourite = (quote, btn, container) => {
  quote.isFavourite = !quote.isFavourite;
  toggleFavouriteBtnIcon(quote.isFavourite, btn);

  if (quote.isFavourite) {
    showFavoutiteCard(quote, container);
  } else {
    hideFavoutireCard(quote.id);
  }
};

const handleFavourite = (isFavourite) => {
  showFavouriteBtn(favouriteBtn);
  toggleFavouriteBtnIcon(isFavourite, favouriteBtn);
};

const toggleFavouriteBtnIcon = (isFavourite, el) => {
  el.classList.toggle("fa-solid", isFavourite);
  el.classList.toggle("fa-regular", !isFavourite);
};

const showFavouriteBtn = (btn) => {
  btn.style.display = "inline-block";
};

const hideFavouriteBtn = (btn) => {
  btn.style.display = "none";
};

const showFavoutiteCard = (quote, container) => {
  const { id, text, author } = quote;
  const favouriteCard = document.createElement("div");
  favouriteCard.classList.add("favourite-card");
  favouriteCard.classList.add("card");
  favouriteCard.dataset.quoteId = id;
  favouriteCard.innerHTML = `
        <p class="fs-5">${text}</p>
        <p class="author-text fs-6">${author}</p>
      `;
  container.appendChild(favouriteCard);
};

const hideFavoutireCard = (id) => {
  const card = document.querySelector(`.favourite-card[data-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
};

export { handleFavourite, toggleFavourite, hideFavouriteBtn };
