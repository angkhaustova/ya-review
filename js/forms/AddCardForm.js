import Form from "./Form";
import EventAggregator from "../events/EventAggregator";
import { validateLengthStr } from "../helpers/validators";

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
