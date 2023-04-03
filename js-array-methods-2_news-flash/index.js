import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
/* const filteredNews = news.filter((card) => {
  return card.categories.includes('politics');
  console.log(filteredNews);
}); */

//Solution 2 (have not used card, but item)
const filteredNews = news.filter((item) => {
  return item.categories.includes('politics');
});

// Part 2 - start here
const sortedNews = filteredNews.sort((a, b) => {
  return a.body.length - b.body.length;
});

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
