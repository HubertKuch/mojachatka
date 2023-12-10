const EventEmitter = require('node:events');

class PaymentsEventEmitter extends EventEmitter {
  static #instance = null;

  /**
   * @returns {PaymentsEventEmitter}
   * */
  static getInstance() {
    if (!this.#instance) {
      this.#instance = new PaymentsEventEmitter();
    }

    return this.#instance;
  }
}

module.exports = { PaymentsEventEmitter };

