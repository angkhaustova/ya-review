import Popup from "./Popup";
import EventAggregator from "../events/EventAggregator";

export default class ProfileFormPopup extends Popup {
  constructor() {
    super(document.querySelector("#profile"));

    EventAggregator.subscribe("ProfileForm.submit", this.close);
    EventAggregator.subscribe("EditProfileButton.click", this.open);
  }
}
