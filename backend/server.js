const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { middlewareRoot } = require("./middlewares/middlewareRoot");
const { connectDB } = require("./config/db");
dotenv.config();

const PORT = process.env.PORT || 5001;
connectDB();

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000/", // frontend URL
        methods: ["GET", "PUT", "POST", "DELETE"], // Allowed HTTP methods
        credentials: true, // Allow cookies and credentials
    })
);

app.use(express.json());
app.use(middlewareRoot);
app.use("/", require("./routes/api"));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
