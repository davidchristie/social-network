import { KafkaClient, Message } from "kafka-node";
import ClientWrapper from "./wrappers/ClientWrapper";

interface Arguments {
  kafkaHost: string;
}

export type Client = ClientWrapper;

export type Message = Message;

export function createKafkaClient ({ kafkaHost }: Arguments): Client {
  const client = new KafkaClient({
    kafkaHost,
  });
  return new ClientWrapper(client);
}

export { ProduceRequest } from "kafka-node";
