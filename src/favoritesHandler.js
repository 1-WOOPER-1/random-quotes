const toggleFavouriteIcon = (isFavourite, el) => {
  el.classList.toggle("fa-solid", isFavourite);
  el.classList.toggle("fa-regular", !isFavourite);
};

const showFavoutiteCard = (quote, author, container) => {
  const favouriteCard = document.createElement("div");
  favouriteCard.classList.add("favourite-card");
  favouriteCard.classList.add("card");
  favouriteCard.innerHTML = `
        <p class="fs-5">${quote}</p>
        <p class="author-text fs-6">${author}</p>
      `;
  container.appendChild(favouriteCard);
};

const hideFavoutireCard = (quote) => {
  const favouritesCards = document.querySelectorAll(".favourite-card");
  favouritesCards.forEach((card) => {
    if (card.innerHTML.includes(quote)) {
      card.remove();
    }
  });
};

export { toggleFavouriteIcon, showFavoutiteCard, hideFavoutireCard };
