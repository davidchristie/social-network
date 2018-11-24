import { Consumer, KafkaClient, OffsetFetchRequest, Producer } from "kafka-node";
import ConsumerWrapper from "./ConsumerWrapper";
import ProducerWrapper from "./ProducerWrapper";

export type ConsumeRequest = OffsetFetchRequest;

export default class ClientWrapper {
  private client: KafkaClient;
  private consumerWrapper: ConsumerWrapper;
  private producerWrapper: ProducerWrapper;

  constructor (client: KafkaClient) {
    this.client = client;
  }

  public close () {
    this.client.close();
  }

  public consumer (requests: ConsumeRequest[]) {
    if (!this.consumerWrapper) {
      const options = {};
      this.consumerWrapper = new ConsumerWrapper(
        new Consumer(this.client, requests, options)
      );
    }
    return this.consumerWrapper;
  }

  public producer () {
    if (!this.producerWrapper) {
      this.producerWrapper = new ProducerWrapper(new Producer(this.client));
    }
    return this.producerWrapper;
  }
}
