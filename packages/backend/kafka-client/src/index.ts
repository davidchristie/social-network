import { KafkaClient, Producer } from "kafka-node";

interface Arguments {
  kafkaHost: string;
}

export function createKafkaClient ({ kafkaHost }: Arguments) {
  return new KafkaClient({
    kafkaHost,
  });
}

export function createKafkaProducer (client: KafkaClient) {
  return new Producer(client);
}
