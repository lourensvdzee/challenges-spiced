// Store the cards in a global state
import { cards } from "./components/Utils/cards.js";
import { App } from "./components/App/app.js";
import { Form } from "./components/Form/form.js";
import { CardList } from "./components/CardList/cardlist.js";


// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();



