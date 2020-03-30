export default class InputField {
  constructor(options) {
    this.validate = this.validate.bind(this);

    this.input = options.input;
    this.validator = options.validator || (() => "");
    this.errorContainer = options.errorContainer;
    this.value = options.value || "";
    this.error = "";
  }

  validate() {
    this.error = this.validator(this.value);
    this.showError();
    return this.isValid;
  }

  showError() {
    this.errorContainer.textContent = this.error;
  }

  set value(value) {
    this.input.value = value;
  }

  get value() {
    return this.input.value;
  }

  get name() {
    return this.input.name;
  }

  get isValid() {
    return this.error === "";
  }
}
