import { currentQuote } from "../../index.js";

const favouritesContainer = document.getElementById("favourites-container");
const favouriteBtn = document.getElementById("favourite-btn");

const toggleFavourite = (quote) => {
  quote.isFavourite = !quote.isFavourite;
  const { text, author, isFavourite } = quote;
  toggleFavouriteBtnIcon(isFavourite, favouriteBtn);

  if (isFavourite) {
    showFavoutiteCard(text, author, favouritesContainer);
  } else {
    hideFavoutireCard(quote.text);
  }
};

const handleFavourite = (isFavourite) => {
  showBtn(favouriteBtn);
  toggleFavouriteBtnIcon(isFavourite, favouriteBtn);
};

const toggleFavouriteBtnIcon = (isFavourite, el) => {
  el.classList.toggle("fa-solid", isFavourite);
  el.classList.toggle("fa-regular", !isFavourite);
};

const showBtn = (btn) => {
  btn.style.display = "inline-block";
};

const hideBtn = (btn) => {
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

favouriteBtn.addEventListener("click", () => toggleFavourite(currentQuote));
hideBtn(favouriteBtn);

export { handleFavourite };
