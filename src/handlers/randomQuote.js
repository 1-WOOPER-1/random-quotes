import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils/math.js";

const getRandomQuote = () => {
  return { ...quotes[generateRandomInt(quotes.length)] };
};

export { getRandomQuote };
