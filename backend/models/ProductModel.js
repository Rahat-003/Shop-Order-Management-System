const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;
const shortid = require("shortid");

const productSchema = new Schema(
    {
        autoGenId: {
            type: String,
            default: shortid.generate,
        },
        barcodeNumber: {
            type: String,
            index: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        unitQuantity: {
            type: Number,
        },
        type: {
            type: String,
            enum: ["food", "grocery"],
            required: true,
        },
        image: {
            type: String,
        },
        deletedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("products", productSchema);
