import { currentQuote } from "../../index.js";

const favouritesContainer = document.getElementById("favourites-container");
const toggleBtn = document.getElementById("favourite-btn");

const toggleFavourite = (quotes) => {
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavouriteIcon(currentQuote.isFavourite, toggleBtn);

  if (currentQuote.isFavourite) {
    showFavoutiteCard(
      currentQuote.text,
      currentQuote.author,
      favouritesContainer
    );
  } else {
    hideFavoutireCard(currentQuote.text);
  }
};

const handleFavourite = (isFavourite) => {
  showBtn(toggleBtn);
  toggleFavouriteIcon(isFavourite, toggleBtn);
};

const toggleFavouriteIcon = (isFavourite, el) => {
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

toggleBtn.addEventListener("click", toggleFavourite);
hideBtn(toggleBtn);

export { handleFavourite };
