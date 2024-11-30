exports.successResponse = (res, { message, data = null }) => {
    let object = { status: true, message };
    if (data) {
        object.data = data;
    }
    return res.json(object);
};

exports.errorResponse = (res, msg, statusCode = 400) => {
    return res.status(statusCode).json({
        status: false,
        message: msg,
        error: msg,
    });
};

exports.errorHandler = async (res, error) => {
    console.log(error);
    return res.status(500).json({
        status: false,
        message: error.message,
        error: error.message,
    });
};
