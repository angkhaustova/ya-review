import Popup from "./Popup.mjs";
import EventAggregator from "../events/EventAggregator.mjs";

export default class BigImagePopup extends Popup {
  constructor() {
    super(document.querySelector("#big-size-image"));

    EventAggregator.subscribe("Card.imageClick", ({ src }) => {
      this.popup.querySelector(".popup__image").setAttribute("src", src);
      this.open();
    });
  }
}
