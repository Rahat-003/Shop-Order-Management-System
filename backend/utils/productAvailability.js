const ProductModel = require("./../models/ProductModel");

exports.checkProductAvailability = async (orderList) => {
    const productCount = {};

    orderList.products.forEach((item) => {
        if (productCount.hasOwnProperty(item._id)) productCount[item._id]++;
        else productCount[item._id] = 1;
    });

    const productPromises = Object.keys(productCount).map(async (productId) => {
        const singleProduct = await ProductModel.findById(productId).select(
            "unitQuantity name"
        );
        return {
            productId,
            name: singleProduct.name,
            unitQuantity: singleProduct.unitQuantity,
            requestedQuantity: productCount[productId],
        };
    });

    const productResults = await Promise.all(productPromises);

    const errorList = [];

    productResults.forEach((product) => {
        if (product.unitQuantity === 0) {
            errorList.push(`${product.name} is out of stock`);
        }
        if (product.unitQuantity < product.requestedQuantity) {
            errorList.push(
                `Remaining product count is ${product.unitQuantity} for ${product.name}`
            );
        }
    });

    return errorList;
};
