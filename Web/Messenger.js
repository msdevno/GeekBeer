class Messenger {
	constructor() {
		this.subscribers = [];
	}

	publish(topic, message) {
		if (this.subscribers.hasOwnProperty(topic)) {
			this.subscribers[topic].subscribers.forEach(function (item) {
				item(message);
			});
		}
	}

	subscribeTo(topic, subscriber) {
		var subscribersByTopic;

		if (this.subscribers.hasOwnProperty(topic)) {
			subscribersByTopic = this.subscribers[topic];
		} else {
			subscribersByTopic = { subscribers: [] };
			this.subscribers[topic] = subscribersByTopic;
		}

		subscribersByTopic.subscribers.push(subscriber);
	}
}

Messenger.global = new Messenger();