const mongoose = require('mongoose');
const dns = require('dns');

// Force Node.js to use Google's public DNS (8.8.8.8) for SRV lookups
// This bypasses corporate/ISP DNS that blocks SRV records
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const connectDB = async () => {
  try {
    console.log('🔌 Connecting to MongoDB Atlas...');
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 20000,
      socketTimeoutMS: 45000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Failed: ${error.message}`);
    console.log('⚠️  Retrying in 10s...');
    setTimeout(connectDB, 10000);
  }
};

module.exports = connectDB;
