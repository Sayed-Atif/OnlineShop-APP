import mongoose from "mongoose";
// import Product from "../models/productModel";
import Product from '../models/productModel.js'
import asyncHandler from '../middleware/asyncHandler.js'



const getProducts = asyncHandler(async (req, res) => {   // controller to get all products from database
    const products = await Product.find({})
    res.json(products)
})


const getProductById = asyncHandler(async (req, res) => { //controller to get a single product from database
    const product = await Product.findById(req.params.id).populate('reviews')
    if (product) {
        res.json(product)
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
})


const createProduct = asyncHandler(async (req, res) => {   // controller to create new product in database
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews
    })
    const newProduct = await product.save()
    if (newProduct) {
        return res.status(201).send({ message: 'New Product Created', data: newProduct })
    }
    return res.status(500).send({ message: 'Error in Creating Product' })
})


const updateProduct = asyncHandler(async (req, res) => { // controller to update an existing product in database
    const productId = req.params.id
    const product = await Product.findById(productId)
    if (product) {
        product.name = req.body.name
        product.image = req.body.image
        product.brand = req.body.brand
        product.category = req.body.category
        product.description = req.body.description
        product.price = req.body.price
        product.countInStock = req.body.countInStock
        product.rating = req.body.rating
        product.numReviews = req.body.numReviews

        // {name, price, description, image, category} = req.body;

        const updatedProduct = await product.save()
        if (updatedProduct) {
            return res.status(200).send({ message: 'Product Updated', data: updatedProduct })
        }
    }
    return res.status(500).send({ message: 'Error in Updating Product' })

})


const deleteProduct = asyncHandler(async (req, res) => { // controller to delete an existing product in database
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    if (deletedProduct) {
        // await deletedProduct.remove()
        res.send({ message: 'Product Deleted' })
    } else {
        res.send('Error in Deletion.')
    }
})





export { getProducts, getProductById, createProduct, updateProduct, deleteProduct }