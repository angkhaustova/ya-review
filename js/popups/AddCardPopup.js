import Popup from "./Popup";
import EventAggregator from "../events/EventAggregator";

export default class AddCardPopup extends Popup {
  constructor() {
    super(document.querySelector("#add-card"));

    EventAggregator.subscribe("AddCardForm.submit", this.close);
    EventAggregator.subscribe("AddCardButton.click", this.open);
  }
}
