const Joi = require("joi");

const productValidationSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Product name is required.",
    }),
    barcodeNumber: Joi.string().required().messages({
        "any.required": "Barcode number is required.",
    }),
    price: Joi.number().positive().required().messages({
        "number.base": "Price must be a valid number.",
        "number.positive": "Price must be a positive number.",
        "any.required": "Price is required.",
    }),
    unitQuantity: Joi.number().positive().optional().messages({
        "number.base": "Unit quantity must be a valid number.",
        "number.positive": "Unit quantity must be a positive number.",
    }),
    type: Joi.string().valid("food", "grocery").required().messages({
        "any.only": "Product type must be either food or grocery.",
        "any.required": "Product type is required.",
    }),
});

module.exports = productValidationSchema;
