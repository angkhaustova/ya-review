import Event from "./Event.mjs";

class EventAggregator {
  constructor() {
    this.events = [];
  }

  getEvent(name) {
    return this.events.find(event => event.name === name);
  }

  publish(name, args) {
    var event = this.getEvent(name);

    if (!event) {
      event = new Event(name);
      this.events.push(event);
    }

    event.fire(args);
  }

  subscribe(name, handler) {
    var event = this.getEvent(name);

    if (!event) {
      event = new Event(name);
      this.events.push(event);
    }

    event.addHandler(handler);
  }
}

export default new EventAggregator();
