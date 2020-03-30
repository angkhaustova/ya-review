import Event from "./Event";

class EventAggregator {
  constructor() {
    this.events = [];
  }

  getEvent(name) {
    return this.events.find(event => event.name === name);
  }

  publish(eventName, eventArgs) {
    console.log("Published event", eventName, eventArgs);
    var event = this.getEvent(eventName);

    if (!event) {
      event = new Event(eventName);
      this.events.push(event);
    }
    event.fire(eventArgs);
  }

  subscribe(eventName, handler) {
    console.log("Subscribed to event", eventName, handler);

    var event = this.getEvent(name);

    if (!event) {
      event = new Event(eventName);
      this.events.push(event);
    }

    event.addHandler(handler);
  }
}

export default new EventAggregator();
