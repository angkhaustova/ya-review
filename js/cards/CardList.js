import Card from "./Card";
import EventAggregator from "../events/EventAggregator";

export default class CardList {
  constructor(container, cards) {
    this.addCard = this.addCard.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.renderCards = this.renderCards.bind(this);

    this.container = container;
    this.cards = cards.map(({ name, link }) => new Card(name, link));

    EventAggregator.subscribe("AddCardForm.submit", this.addCard);
  }

  addCard({ name, link }) {
    const newCard = new Card(name, link);
    this.cards.push(newCard);
    this.renderCard(newCard);
  }

  renderCard(card) {
    this.container.appendChild(card.card);
  }

  renderCards() {
    this.container.innerHTML = "";
    this.cards.forEach(this.renderCard);
  }
}
