const mongoose = require("mongoose");
const log = console.log;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    log(`MongoDB Connected: ${conn.connection.host}`.bgMagenta.underline);
  } catch (error) {
    log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
