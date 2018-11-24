import {
  createKafkaClient,
  createKafkaProducer
} from "kafka-client";
import { KAFKA_HOST } from "../../constants/hosts";

describe("Kafka service", () => {
  it("can create topics", done => {
    const client = createKafkaClient({
      kafkaHost: KAFKA_HOST,
    });
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

  it("can send messages", done => {
    const client = createKafkaClient({
      kafkaHost: KAFKA_HOST,
    });
    const producer = createKafkaProducer(client);
    producer.on("ready", () => {
      const payloads = [
        {
          messages: [
            "Message 1",
            "Message 2",
            "Message 3",
          ],
          topic: "test",
        },
      ];
      producer.send(payloads, (error, data) => {
        expect(error).toBeNull();
        done();
      });
    });
  });
});
