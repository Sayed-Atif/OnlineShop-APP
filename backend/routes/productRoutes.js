import express from 'express'
// import Product from '../models/productModel.js'
// import products from '../data/products.js'
// import asyncHandler from '../middleware/asyncHandler.js'
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js'

const router = express.Router()  



router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

router.route('/:id').put(updateProduct);

router.route('/:id').delete(deleteProduct);

router.route('/').post(createProduct);


// router.get('/', 
//     asyncHandler(async (req, res) => {      // router to get all products from database
//     const products = await Product.find({})
//     res.send(products)
// })
// )

// router.get('/:id', 
//     asyncHandler(async (req, res) => {     // router to get a single product from database
//     const product = await Product.findById(req.params.id)
//     if (product) {
//         res.send(product)
//     } else {
//         res.status(404).send({ message: 'Product Not Found' })
//     }
// }))


// router.post('/', 
//     asyncHandler(async (req, res) => {// router to create new product in database
//     const product = new Product({
//         name: req.body.name,
//         image: req.body.image,
//         brand: req.body.brand,
//         category: req.body.category,
//         description: req.body.description,
//         price: req.body.price,
//         countInStock: req.body.countInStock,
//         rating: req.body.rating,
//         numReviews: req.body.numReviews
//     })
//     const newProduct = await product.save()
//     if (newProduct) {
//         return res.status(201).send({ message: 'New Product Created', data: newProduct })
//     }
//     return res.status(500).send({ message: 'Error in Creating Product' })
// })
// )


// router.put('/:id', 
//     asyncHandler(async (req, res) => { // router to update an existing product in database
//     const productId = req.params.id
//     const product = await Product.findById(productId)
//     if (product) {
//         product.name = req.body.name
//         product.image = req.body.image
//         product.brand = req.body.brand
//         product.category = req.body.category
//         product.description = req.body.description
//         product.price = req.body.price
//         product.countInStock = req.body.countInStock
//         product.rating = req.body.rating
//         product.numReviews = req.body.numReviews
//         const updatedProduct = await product.save()
//         if (updatedProduct) {
//             return res.status(200).send({ message: 'Product Updated', data: updatedProduct })
//         }
//     }
//     return res.status(500).send({ message: 'Error in Updating Product' })

// })
// )


// router.delete('/:id', 
//     asyncHandler(async (req, res) => { // router to delete an existing product in database
//     const deletedProduct = await Product.findById(req.params.id)
//     if (deletedProduct) {
//         await deletedProduct.remove()
//         res.send({ message: 'Product Deleted' })
//     } else {
//         res.send('Error in Deletion.')
//     }
// }
// )
// )




// const createProductReview = asyncHandler(async (req, res) => {
//     const { rating, comment } = req.body

//     const product = await Product.findById(req.params.id)

//     if (product) {
//         const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())

//         if (alreadyReviewed) {
//             res.status(400)
//             throw new Error('Product Already Reviewed')
//         }

//         const review = {
//             name: req.user.name,
//             rating: Number(rating),
//             comment,
//             user: req.user._id
//         }

//         product.reviews.push(review)

//         product.numReviews = product.reviews.length

//         product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

//         await product.save()

//         res.status(201).send({ message: 'Review Added' })

//     } else {
//         res.status(404)
//         throw new Error('Product Not Found')
//     }
// })


export default router