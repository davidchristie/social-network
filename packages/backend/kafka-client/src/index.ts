import { KafkaClient } from "kafka-node";

interface Arguments {
  kafkaHost: string;
}

export function createKafkaClient ({ kafkaHost }: Arguments) {
  return new KafkaClient({
    kafkaHost,
  });
}
