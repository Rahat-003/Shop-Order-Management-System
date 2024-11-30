const {
    successResponse,
    errorResponse,
    errorHandler,
} = require("./../utils/apiResponse");

exports.getProductList = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully fetched productList" });
    } catch (err) {
        errorHandler(res, err);
    }
};

exports.addProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully added product" });
    } catch (err) {
        errorHandler(res, err);
    }
};
exports.updateProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully updated product" });
    } catch (err) {
        errorHandler(res, err);
    }
};
exports.deleteProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Successfully deleted product" });
    } catch (err) {
        errorHandler(res, err);
    }
};
