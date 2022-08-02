import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0,
  uri:
    process.env.MONGO_URI || "mongodb://localhost:27017/restaurants-ecommerce",
};

export const connect = async () => {
  if (mongoConnection.isConnected !== 0) {
    console.log("Already connected to mongo");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Already connected to mongo");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(mongoConnection.uri);
  mongoConnection.isConnected = 1;
  console.log("Connected to MongoDB");
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log("Disconnected from MongoDB");
};
