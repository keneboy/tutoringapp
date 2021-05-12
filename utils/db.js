//CREATING A MONGODB CONNECTION
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`connected to mongodb`);
  } catch (error) {
    console.error(`Error:${error.message}`);
  }
};

module.exports = connectDb;
