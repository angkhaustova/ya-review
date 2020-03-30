import Form from "./Form.mjs";
import EventAggregator from "../events/EventAggregator.mjs";
import { validateLengthStr } from "../helpers/validators.mjs";

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
