const mongoose = require("mongoose");
/**
 * MongoDB Connection
 */

exports.connectDB = async() => {

    mongoose.set("strictQuery", true);
    
mongoose
    .connect(process.env.MONGODB_URL, {
        // maxPoolSize: process.env.MONGODB_MAX_POOL_SIZE,
        // connectTimeoutMS: process.env.MONGODB_CONNECT_TIMEOUT_MS,
    })
    .then(() => {
        console.log(
            "Mongodb Connected to %s",
            process.env.MONGODB_URL.substring(
                process.env.MONGODB_URL.lastIndexOf("/") + 1
            )
        );
    })
    .catch((err) => {
        console.error("App starting error:", err.message);
        process. Exit(1);
    });
    
}