import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import products from '../products'
import Rating from './Rating'
const Product = ({product}) => {
  return (
    // <div className='grid-container'>
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' className='product-img'/>
        </Link>

         <Card.Body>
             <Link to={`/product/${product._id}`}>
                 <Card.Title as='div' className='product-title'>
                     <strong>{product.name}</strong>
                 </Card.Title>
             </Link>

             <Card.Text as='div'>
                 <div className='my-3'>
                 <Rating value={product.rating} 
                 text={`${product.numReviews} reviews`} />
                 </div>
             </Card.Text>

             <Card.Text as='div'>
                 <div className='my-3'>
                     {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                 </div>
             </Card.Text>
             

             {/* <Card.Text as='h3'>
                ${product.price}
             </Card.Text> */}

             {/* <Card.Text as='div'>
                 {product.description}
             </Card.Text> */}

         </Card.Body> 
    </Card>
    // </div>
  );
};

export default Product