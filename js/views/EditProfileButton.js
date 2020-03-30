import EventAggregator from "../events/EventAggregator";

export default class EditProfileButtonView {
  constructor() {
    document
      .querySelector(".user-info__edit")
      .addEventListener("click", () =>
        EventAggregator.publish("EditProfileButton.click")
      );
  }
}
