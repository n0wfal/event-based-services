const { Kafka } = require('kafkajs');
const UserModel = require('./model');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092'],
});

const producer = kafka.producer();

const topic = 'topic-testc';

const create = async ({ email, name }) => {
  const newUser = new UserModel({
    name,
    email,
  });
  await producer.connect();
  await producer.send({
    topic,
    messages: [
      {
        value: 'TE',
      },
    ],
  });
  await newUser.save();
  return newUser._id;
};

module.exports = {
  create,
};
