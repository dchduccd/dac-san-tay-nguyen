const { MongoClient } = require("mongodb");

const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "dac_san_tay_nguyen";

if (!mongoUri) {
  throw new Error("Thiếu biến môi trường MONGODB_URI.");
}

const client = new MongoClient(mongoUri);
let db;

async function connectDB() {
  if (db) return db;

  await client.connect();
  db = client.db(dbName);

  // Đảm bảo email là duy nhất trong collection accounts.
  await db.collection("accounts").createIndex(
    { email: 1 },
    { unique: true }
  );

  console.log("MongoDB đã kết nối.");
  return db;
}

function getDB() {
  if (!db) {
    throw new Error("MongoDB chưa được kết nối.");
  }
  return db;
}

module.exports = { connectDB, getDB };
