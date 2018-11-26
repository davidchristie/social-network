import { Client, createKafkaClient, Message } from "kafka-client";
import { KAFKA_HOST } from "../../constants/hosts";

describe("Kafka service", () => {
  const topic = "test";

  let client: Client;

  beforeAll(() => {
    client = createKafkaClient({
      kafkaHost: KAFKA_HOST,
    });
  });

  afterAll(() => {
    client.close();
  });

  it("can send and receive messages", async done => {
    const sentMessages = [
      "Message 1",
      "Message 2",
      "Message 3",
    ];
    await client.producer().send([
      {
        messages: sentMessages,
        topic: "test",
      },
    ]);
    const receivedMessages = new Set<string | Buffer>();
    const handleMessage = jest.fn(({ value }: Message) => {
      receivedMessages.add(value);
      expect(sentMessages).toContain(value);
      if (receivedMessages.size === sentMessages.length) {
        done();
      }
    });
    client.consumer([{ offset: 0, topic }]).onMessage(handleMessage);
  });
});
