import EventAggregator from "../events/EventAggregator.mjs";

export default class Card {
  constructor(placeName, imageUrl) {
    this.placeName = placeName;
    this.imageUrl = imageUrl;
    this.card = this._create();
  }

  like() {
    this.card
      .querySelector(".place-card__like-icon")
      .classList.toggle("place-card__like-icon_liked");
  }

  remove() {
    this.card.remove();
  }

  _create() {
    const card = document.createElement("div");
    card.classList.add("place-card");

    const image = document.createElement("div");
    image.classList.add("place-card__image");
    image.style.backgroundImage = `url(${this.imageUrl})`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("place-card__delete-icon");

    const description = document.createElement("div");
    description.classList.add("place-card__description");

    const title = document.createElement("h3");
    title.classList.add("place-card__name");
    title.textContent = this.placeName;

    const likeButton = document.createElement("button");
    likeButton.classList.add("place-card__like-icon");

    card.appendChild(image);
    image.appendChild(deleteButton);
    card.appendChild(description);
    description.appendChild(title);
    description.appendChild(likeButton);

    this._addEventListeners(card);

    return card;
  }

  _addEventListeners(card) {
    card
      .querySelector(".place-card__like-icon")
      .addEventListener("click", () => this.like());

    card
      .querySelector(".place-card__delete-icon")
      .addEventListener("click", e => {
        e.stopPropagation();
        this.remove();
      });

    card.querySelector(".place-card__image").addEventListener("click", () => {
      EventAggregator.publish("Card.imageClick", {
        src: card.style.backgroundImage.slice(5, -2)
      });
    });
  }
}
