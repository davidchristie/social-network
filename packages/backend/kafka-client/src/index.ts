import { KafkaClient, Producer, ProducerOptions } from "kafka-node";

interface Arguments {
  kafkaHost: string;
}

export function createKafkaClient ({ kafkaHost }: Arguments) {
  return new KafkaClient({
    kafkaHost,
  });
}

export function createKafkaProducer (client: KafkaClient) {
  const options: ProducerOptions = {
    requireAcks: 1,
  };
  return new Producer(client, options);
}
