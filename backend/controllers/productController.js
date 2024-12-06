const {
    successResponse,
    errorResponse,
    errorHandler,
} = require("./../utils/apiResponse");
const ProductModel = require("./../models/ProductModel");
const productValidationSchema = require("../validation/product/productValidationSchema");
const productUpdateSchema = require("../validation/product/productUpdateSchema");

exports.getProductList = async (req, res) => {
    try {
        const product = await ProductModel.find({
            deletedAt: null,
        });
        successResponse(res, {
            message: "Successfully fetched products",
            data: {
                product,
            },
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.addProduct = async (req, res) => {
    try {
        const { barcodeNumber } = req.body;
        const { error, value } = productValidationSchema.validate(req.body, {
            abortEarly: true,
        });

        if (error) {
            return errorResponse(res, error.message);
        }
        const barcodeNumberExists = await ProductModel.findOne({
            barcodeNumber,
            deletedAt: null,
        });

        if (barcodeNumberExists)
            return errorResponse(res, "barcode number already exists.");

        const product = await ProductModel.create(value);

        successResponse(res, {
            message: "product added successfully",
            data: {
                product,
            },
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        if (Object.keys(req.body).length === 0) {
            return errorResponse(
                res,
                "At least one field must be provided to update"
            );
        }
        const { error, value } = productUpdateSchema.validate(req.body, {
            abortEarly: true,
        });

        if (error) {
            return errorResponse(res, error.message);
        }

        const product = await ProductModel.findById(productId);
        if (!product) {
            return errorResponse(res, "Product not found", 404);
        }

        Object.assign(product, value);

        await product.save();

        successResponse(res, {
            message: "product updated successfully",
            data: {
                product,
            },
        });
    } catch (err) {
        console.log(err);
        errorHandler(res, err);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const deletedProduct = await ProductModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        successResponse(res, {
            message: "product deleted successfully",
            data: {
                deletedProduct,
            },
        });
    } catch (err) {
        errorHandler(res, err);
    }
};
