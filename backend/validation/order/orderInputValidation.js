const Joi = require("joi");
const mongoose = require("mongoose");

const orderValidationSchema = Joi.object({
    products: Joi.array()
        .items(
            Joi.string().custom((value, helpers) => {
                // Validate if the string is a valid ObjectId
                if (!mongoose.Types.ObjectId.isValid(value)) {
                    return helpers.error("any.invalid"); // Return a validation error if the ObjectId is not valid
                }
                return value;
            })
        )
        .min(1) // Ensure the array has at least one product
        .required()
        .messages({
            "array.min": "Please select at least one product",
            "array.base": "Products should be an array of ObjectIds",
            "any.invalid": "Each product must be a valid ObjectId", // Custom message for invalid ObjectId
        }),
});

module.exports = { orderValidationSchema };
