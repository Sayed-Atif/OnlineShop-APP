
import express from 'express'
const asyncHandler = (fn) => (req, res, next) => {  // a custom middleware to handle async errors in routes  
    Promise.resolve(fn(req, res, next)).catch(next)
}





 

// fn is a callback function that takes (req, res, next) as parameters

export default asyncHandler