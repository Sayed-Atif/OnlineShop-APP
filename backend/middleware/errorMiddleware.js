
// @desc Not found error middleware for error handling 
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}
      

// @desc Error handling middleware for error handling 
const errorHandler = (err, req, res, next) => {
    // console.log(err.stack)
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let message = err.message
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404
        message = 'Resource Not Found'
    }

    res.status(statusCode)
    res.json({
        message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    })
}

 


export { notFound, errorHandler }