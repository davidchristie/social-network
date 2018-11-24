import {
  createKafkaClient,
  createKafkaProducer
} from "kafka-client";
import { KAFKA_HOST } from "../../constants/hosts";

const client = createKafkaClient({
  kafkaHost: KAFKA_HOST,
});

afterAll(() => {
  client.close();
});

describe("Kafka service", () => {
  it("can create topics", done => {
    const producer = createKafkaProducer(client);
    const topics = ["topic1", "topic2", "topic3"];
    producer.on("ready", () => {
      producer.createTopics(topics, true, (error, data) => {
        console.log("createTopics data", data);
        expect(error).toBeNull();
        done();
      });
    });
  });
});
