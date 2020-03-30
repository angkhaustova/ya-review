import Popup from "./Popup.mjs";
import EventAggregator from "../events/EventAggregator.mjs";

export default class AddCardPopup extends Popup {
  constructor() {
    super(document.querySelector("#add-card"));

    EventAggregator.subscribe("AddCardForm.submit", this.close);
    EventAggregator.subscribe("AddCardButton.click", this.open);
  }
}
