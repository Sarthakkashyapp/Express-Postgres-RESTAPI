//Global error handler middleware
const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: "something went wrong",
        error: err.message
    })
}

export default errorHandler;