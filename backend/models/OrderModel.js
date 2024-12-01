const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = Schema.Types;
const { ObjectId } = Types;

const OrderSchema = new Schema(
    {
        user: {
            type: ObjectId,
            ref: "users",
            required: true,
        },
        orderId: {
            type: String,
            required: true,
            unique: true,
        },
        products: [
            {
                type: ObjectId,
                ref: "products",
                required: true,
            },
        ],
        status: {
            type: String,
            enum: ["delivered", "pending", "cancelled"],
            default: "pending",
        },
    },
    { timestamps: true }
);

OrderSchema.index({ user: 1 });
OrderSchema.index({ orderId: 1 });

module.exports = mongoose.model("order", OrderSchema);
