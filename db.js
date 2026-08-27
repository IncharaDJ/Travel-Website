const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
    await client.connect();
    console.log("Connected to MongoDB");
}

module.exports = { client, connectDB };

