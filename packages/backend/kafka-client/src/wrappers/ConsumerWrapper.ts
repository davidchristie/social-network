import { Consumer, Message } from "kafka-node";

export default class ConsumerWrapper {
  private consumer: Consumer;

  constructor (consumer: Consumer) {
    this.consumer = consumer;
  }

  public onError (callback: (error: any) => void) {
    this.consumer.on("error", callback);
  }

  public onMessage (callback: (message: Message) => void) {
    this.consumer.on("message", callback);
  }

  public onOffsetOutOfRange (callback: (error: any) => void) {
    this.consumer.on("offsetOutOfRange", callback);
  }
}
