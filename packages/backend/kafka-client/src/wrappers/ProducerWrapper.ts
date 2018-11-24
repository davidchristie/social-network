import { Producer, ProduceRequest } from "kafka-node";

export default class ProducerWrapper {
  private producer: Producer;
  private ready: Promise<void>;

  constructor (producer: Producer) {
    this.producer = producer;
    this.ready = new Promise(resolve => {
      producer.on("ready", () => resolve());
    });
  }

  public async send (requests: ProduceRequest[]) {
    await this.ready;
    return new Promise((resolve, reject) => {
      this.producer.send(requests, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
}
