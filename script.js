import quotes from "./quotes.js";

const quoteParagraph = document.getElementById("quote");
const quoteAuthorParagraph = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavouriteBtn = document.getElementById("favourite-btn");
const favouritesContainer = document.getElementById("favourites-container");

let currentQuoteIndex;
let favouriteQuoteFlag = false;

const generateRandomQuote = () => {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author, isFavourite } = quotes[currentQuoteIndex];
  quoteParagraph.innerHTML = quote;
  quoteAuthorParagraph.innerHTML = author;
  isFavourite
    ? (toggleFavouriteBtn.innerHTML = "Remove from favourites")
    : (toggleFavouriteBtn.innerHTML = "Add to favourites");

  toggleFavouriteBtn.style.display = "inline-block";
};

const toggleFavourite = () => {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavourite = !currentQuote.isFavourite;
  quotes[currentQuoteIndex].isFavourite
    ? (toggleFavouriteBtn.innerHTML = "Remove from favourites")
    : (toggleFavouriteBtn.innerHTML = "Add to favourites");
  console.log(currentQuote);

  if (currentQuote.isFavourite) {
    const favouriteCard = document.createElement("div");
    favouriteCard.classList.add("favourite-card");
    favouriteCard.classList.add("card");
    favouriteCard.innerHTML = `
          <p class="fs-5">${currentQuote.quote}</p>
          <p class="author-text fs-6">${currentQuote.author}</p>
          `;
    favouritesContainer.appendChild(favouriteCard);
  } else {
    const favouritesCards = document.querySelectorAll(".favourite-card");
    favouritesCards.forEach((card) => {
      if (card.innerHTML.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
};

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavouriteBtn.addEventListener("click", toggleFavourite);
