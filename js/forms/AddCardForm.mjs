import Form from "./Form.mjs";
import EventAggregator from "../events/EventAggregator.mjs";
import { validateLengthStr } from "../helpers/validators.mjs";

export default class AddCardForm extends Form {
  constructor({ form, inputs, initialValues }) {
    super({ form, inputs, initialValues });

    this.form.addEventListener("submit", this.submit);
  }

  submit(e) {
    e.preventDefault();

    if (!this.validate()) {
      return;
    }

    EventAggregator.publish("AddCardForm.submit", {
      name: this.getInput("name").value,
      link: this.getInput("link").value
    });

    this.reset();
  }
}
