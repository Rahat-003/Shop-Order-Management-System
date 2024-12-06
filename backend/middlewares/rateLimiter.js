const express = require("express");
const { createClient } = require("redis");
const { errorResponse } = require("./../utils/apiResponse");
const app = express();
const redisClient = createClient();
redisClient.connect();

const RATE_LIMIT_WINDOW = 60;
const MAX_REQUESTS = Number(process.env.MAX_REQUESTS);

exports.rateLimiter = async (req, res, next) => {
    try {
        const currentMinute = new Date().toISOString().slice(0, 16);

        const key = `api-hits:${currentMinute}`;

        const count = await redisClient.incr(key);

        if (count === 1) {
            await redisClient.expire(key, RATE_LIMIT_WINDOW);
        }
        console.log({ currentMinute, count });

        if (count > 10) {
            return res.status(429).json({
                status: 429,
                message: "Too many requests, please try again later.",
            });
        }

        next();
    } catch (error) {
        console.error("Rate limiter error:", error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
