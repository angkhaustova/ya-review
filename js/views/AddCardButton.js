import EventAggregator from "../events/EventAggregator";

export default class AddCardButton {
  constructor() {
    document
      .querySelector(".user-info__button")
      .addEventListener("click", () =>
        EventAggregator.publish("AddCardButton.click")
      );
  }
}
