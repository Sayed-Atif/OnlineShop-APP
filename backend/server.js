import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// import products from './data/products.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'  


import productRoutes from './routes/productRoutes.js'
import userRoutes  from './routes/userRoutes.js'


import cors from 'cors'
import bodyParser from 'body-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()

const port = process.env.PORT || 5000


//cors & bodyparser middleware 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

//@description:  Middleware for cookies 
app.use(cookieParser())




app.get('/', (req, res) => {   // Im not sure if this is needed or not
    res.send('Server is ready!')
})


// Routes Middleware:
app.use('/api/products', productRoutes)  
app.use('/api/users', userRoutes)
// app.use('/api/orders', productRoutes)



// Error Handling Middleware:
app.use(notFound)     
app.use(errorHandler)  




// Connect to DB:
connectDB()  

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})