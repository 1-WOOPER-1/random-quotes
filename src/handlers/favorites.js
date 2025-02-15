import { favouriteBtn } from "../../index.js";

const toggleFavourite = (quote, btn, container) => {
  quote.isFavourite = !quote.isFavourite;
  const { text, author, isFavourite } = quote;
  toggleFavouriteBtnIcon(isFavourite, btn);

  if (isFavourite) {
    showFavoutiteCard(text, author, container);
  } else {
    hideFavoutireCard(quote.text);
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

const showFavoutiteCard = (text, author, container) => {
  const favouriteCard = document.createElement("div");
  favouriteCard.classList.add("favourite-card");
  favouriteCard.classList.add("card");
  favouriteCard.innerHTML = `
        <p class="fs-5">${text}</p>
        <p class="author-text fs-6">${author}</p>
      `;
  container.appendChild(favouriteCard);
};

const hideFavoutireCard = (text) => {
  const favouritesCards = document.querySelectorAll(".favourite-card");
  favouritesCards.forEach((card) => {
    if (card.innerHTML.includes(text)) {
      card.remove();
    }
  });
};

export { handleFavourite, toggleFavourite, hideFavouriteBtn };
