import Form from "./Form";
import EventAggregator from "../events/EventAggregator";
import { validateLengthStr } from "../helpers/validators";

export default class ProfileForm extends Form {
  constructor({ form, inputs }) {
    super({ form, inputs });

    this.validate();
  }

  submit(e) {
    e.preventDefault();

    if (!this.validate()) {
      return;
    }

    EventAggregator.publish("ProfileForm.submit", {
      name: this.getInput("name").value,
      job: this.getInput("job").value
    });
  }
}
