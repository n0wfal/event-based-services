const { Kafka } = require('kafkajs');
const ProductModel = require('./product.model');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092'],
});

const producer = kafka.producer();
const consumer = kafka.consumer({
  groupId: 'product-consumer',
});

const productListener = async ({ message, topic }) => {
  try {
    await producer.connect();
    await producer.send({
      topic,
      messages: [{
        key: `${new Date()}`,
        value: message,
      }],
    });
  } catch (error) {
    await producer.disconnect();
    throw error;
  }
};

const productConsumer = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({
      topic: 'product',
    });
    await consumer.run({
      eachMessage: async ({
        topic, partition, message,
      }) => {
        const product = JSON.parse(message.value.toString());
        const existingProduct = await ProductModel.findOne({
          _id: product._id,
        });
        if (!existingProduct) {
          const newPrd = new ProductModel({
            product_id: product._id,
            name: product.name,
            image: product.image,
          });
          await newPrd.save();
        }
      },
    });
  } catch (error) {
    await consumer.disconnect();
  }
};

module.exports = {
  productListener,
  productConsumer,
};
