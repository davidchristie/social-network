import { KafkaClient, Producer } from "kafka-node";
import ProducerWrapper from "./ProducerWrapper";

export default class ClientWrapper {
  private client: KafkaClient;
  private producerWrapper: ProducerWrapper;

  constructor (client: KafkaClient) {
    this.client = client;
  }

  public close () {
    this.client.close();
  }

  public producer () {
    if (!this.producerWrapper) {
      this.producerWrapper = new ProducerWrapper(new Producer(this.client));
    }
    return this.producerWrapper;
  }
}
