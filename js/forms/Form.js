import InputField from "./InputField";

export default class Form {
  constructor({ form, inputs }) {
    this.validate = this.validate.bind(this);
    this.submit = this.submit.bind(this);

    this.form = form;

    this.inputs = inputs.map(options => {
      const formName = this.form.attributes.name.value;
      const inputName = options.input.name;

      options.input.addEventListener("input", this.validate);

      return new InputField({
        errorContainer: this.form.querySelector(
          `#error-${formName}-${inputName}`
        ),
        ...options
      });
    });

    this.form.addEventListener("submit", this.submit);
  }

  /**
   * @abstract
   */
  submit() {
    throw new Error("Abstract method was called.");
  }

  getInput(name) {
    return this.inputs.find(input => input.name === name);
  }

  reset() {
    this.inputs.forEach(input => (input.value = null));
  }

  toggleSubmitButton(isEnabled) {
    this.form
      .querySelector(".popup__button")
      .classList.toggle("popup__button_enable", isEnabled);
  }

  validate() {
    const isValid = this.inputs.reduce(
      (isValid, input) => input.validate() && isValid,
      true
    );

    this.toggleSubmitButton(isValid);

    return isValid;
  }
}
