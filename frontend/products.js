const products = [
  {
    _id: '1',
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'iPhone 13 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Sony Playstation 5',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12},
    {
      _id: '7',
      name: 'Samsung Galaxy S21 128GB',
      image: 'https://electronicsforce.com/cdn/shop/products/s21felavender_1c32cd0c-64fd-4a71-b0ef-a7c64d9e40ed.jpg?v=1709624311&width=800',
      description:
        'Samsung Galaxy S21 offers a stunning design and pro-grade camera for capturing beautiful moments. 5G connectivity for super-fast internet speeds',
      brand: 'Samsung',
      category: 'Electronics',
      price: 799.99,
      countInStock: 15,
      rating: 4.3,
      numReviews: 22,
    },
    {
      _id: '8',
      name: 'Bose Noise Cancelling Headphones 700',
      image: '/images/bose.jpg', // Ensure this image path exists
      description:
        'Experience the best in noise cancelling technology with the Bose 700 headphones. Premium sound quality and intuitive touch controls',
      brand: 'Bose',
      category: 'Electronics',
      price: 299.99,
      countInStock: 9,
      rating: 4.7,
      numReviews: 30,
    },
    {
      _id: '9',
      name: 'Dell XPS 13 Laptop',
      image: '/images/dell.jpg', // Ensure this image path exists
      description:
        'Dell XPS 13 offers a stunning 13.3-inch InfinityEdge display and powerful performance with the latest Intel processors. Lightweight and durable design',
      brand: 'Dell',
      category: 'Electronics',
      price: 1099.99,
      countInStock: 4,
      rating: 4.4,
      numReviews: 18,
    },
    {
      _id: '10',
      name: 'Apple Watch Series 7',
      image: '/images/applewatch.jpg', // Ensure this image path exists
      description:
        'The Apple Watch Series 7 features a larger, more advanced display, powerful health tracking capabilities, and seamless integration with your Apple devices',
      brand: 'Apple',
      category: 'Electronics',
      price: 399.99,
      countInStock: 6,
      rating: 4.8,
      numReviews: 25,
    },
    {
      _id: '11',
      name: 'Nikon D3500 DSLR Camera',
      image: '/images/nikon.jpg', // Ensure this image path exists
      description:
        'Nikon D3500 is a user-friendly DSLR camera that delivers stunning photos and videos. Perfect for beginners and experienced photographers alike',
      brand: 'Nikon',
      category: 'Electronics',
      price: 499.99,
      countInStock: 8,
      rating: 4.2,
      numReviews: 14,
    },
    {
      _id: '12',
      name: 'Fitbit Charge 5',
      image: '/images/fitbit.jpg', // Ensure this image path exists
      description:
        'Fitbit Charge 5 is the advanced fitness and health tracker that helps you stay motivated and achieve your goals. Built-in GPS and heart rate monitoring',
      brand: 'Fitbit',
      category: 'Electronics',
      price: 129.99,
      countInStock: 10,
      rating: 4.1,
      numReviews: 19,
    },
    {
      _id: '13',
      name: 'JBL Flip 5 Bluetooth Speaker',
      image: '/images/jbl.jpg', // Ensure this image path exists
      description:
        'JBL Flip 5 offers bold sound for every adventure. Take your tunes on the go with the powerful, waterproof, and durable Bluetooth speaker',
      brand: 'JBL',
      category: 'Electronics',
      price: 99.99,
      countInStock: 20,
      rating: 4.5,
      numReviews: 35,
    },
    {
      _id: '14',
      name: 'GoPro HERO9 Black',
      image: '/images/gopro.jpg', // Ensure this image path exists
      description:
        'The GoPro HERO9 Black captures stunning 5K video and 20MP photos. Rugged and waterproof design for capturing adventures in the most extreme environments',
      brand: 'GoPro',
      category: 'Electronics',
      price: 399.99,
      countInStock: 12,
      rating: 4.6,
      numReviews: 28,
    },
    {
      _id: '15',
      name: 'Kindle Paperwhite',
      image: '/images/kindle.jpg', // Ensure this image path exists
      description:
        'Kindle Paperwhite features a high-resolution display, built-in adjustable light, and waterproof design. Perfect for reading in any environment',
      brand: 'Amazon',
      category: 'Electronics',
      price: 129.99,
      countInStock: 15,
      rating: 4.7,
      numReviews: 32,
    },
    {
      _id: '16',
      name: 'Microsoft Surface Pro 7',
      image: '/images/surface.jpg', // Ensure this image path exists
      description:
        'Microsoft Surface Pro 7 is a versatile 2-in-1 laptop with powerful performance and a stunning touchscreen display. Perfect for work and play on the go',
      brand: 'Microsoft',
      category: 'Electronics',
      price: 899.99,
      countInStock: 7,
      rating: 4.3,
      numReviews: 20,
    },
  ];

export default products;