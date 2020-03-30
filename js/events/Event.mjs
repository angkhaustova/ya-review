export default class Event {
  constructor(name) {
    this._handlers = [];
    this.name = name;
  }

  addHandler(handler) {
    this._handlers.push(handler);
  }

  removeHandler(handler) {
    for (var i = 0; i < handlers.length; i++) {
      if (this._handlers[i] == handler) {
        this._handlers.splice(i, 1);
        break;
      }
    }
  }

  fire(args) {
    this._handlers.forEach(handler => {
      handler(args);
    });
  }
}
