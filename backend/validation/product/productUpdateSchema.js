const Joi = require("joi");
const productUpdateSchema = Joi.object({
    barcodeNumber: Joi.string().optional(),
    name: Joi.string().optional(),
    price: Joi.number().positive().optional(),
    unitQuantity: Joi.number().positive().optional(),
    type: Joi.string().valid("food", "grocery").optional(),
    deletedAt: Joi.date().optional(),
});

module.exports = productUpdateSchema;
