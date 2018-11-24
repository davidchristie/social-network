import { Client, createKafkaClient } from "kafka-client";
import { KAFKA_HOST } from "../../constants/hosts";

describe("Kafka service", () => {
  let client: Client;

  beforeAll(() => {
    client = createKafkaClient({
      kafkaHost: KAFKA_HOST,
    });
  });

  afterAll(() => {
    client.close();
  });

  it("can send messages", async () => {
    const requests = [
      {
        messages: [
          "Message 1",
          "Message 2",
          "Message 3",
        ],
        topic: "test",
      },
    ];
    await client.producer().send(requests);
  });
});
