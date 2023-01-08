class EventStore {
    #callbacks = {};

    publish(event, data) {
        if (!this.#callbacks[event]) return;

        this.#callbacks[event].forEach(callback => callback(data));
    }

    subscribe(event, callback) {
        if (!this.#callbacks[event]) this.#callbacks[event] = [];

        this.#callbacks[event].push(callback);
    }
}

export default new EventStore();