const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092'],
});

const producer = kafka.producer();

const sendMessage = async (message, topic) => {
  try {
    await producer.connect();
    await producer.send({
      topic,
      messages: [{
        key: `${new Date()}`,
        value: message,
      }],
    });
    console.log('Message sent');
  } catch (error) {
    console.log(error);
    await producer.disconnect();
    throw error;
  }
};

module.exports = {
  sendMessage,
};
