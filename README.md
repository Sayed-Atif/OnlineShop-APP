# Atif OnlineShop: 
Welcome to Atif OnlineShop, a Full Stack Responsive Ecommerce MERN Application designed to deliver a seamless shopping experience. This project features both frontend and backend components, ensuring a robust and secure environment for users.


# Single Product View:

![image](https://github.com/Sayed-Atif/Online-Shop-App/assets/160655894/db87d68c-b67f-42ac-a426-56cb87fab3c1)


# Home Page:

![image](https://github.com/Sayed-Atif/Online-Shop-App/assets/160655894/0fe46654-95ff-4f57-b26e-228be20952ed)


# Responsive Page:

![image](https://github.com/Sayed-Atif/Online-Shop-App/assets/160655894/eff473ce-fcaf-4d78-961a-24c1d7667684)


# Password Hashing: 

![image](https://github.com/Sayed-Atif/Online-Shop-App/assets/160655894/85f5d50a-13f8-4acb-9f0f-f7798da9031e)



# JSON WEB TOKEN (JWT) Creation While User Login using POSTMANT:

![image](https://github.com/Sayed-Atif/Online-Shop-App/assets/160655894/b3df793e-9522-417a-b446-33f97a912df4)


# Error Handling:

Here I put the wrong path for login and it is showing the error type and error place as well exactly:
![image](https://github.com/Sayed-Atif/OnlineShop-APP/assets/160655894/e12f8b72-d2bb-45b6-b081-5e519825d3c8)



# Technologies Used:

# Frontend:
•	React: A JavaScript library for building user interfaces.
•	React Bootstrap: A front-end framework for responsive design and UI components.
•	CSS3: Styling the application.
•	Redux: A state management library.
•	Redux Toolkit: A toolset for efficient Redux development and state management.

# Backend:
•	JavaScript: The programming language used for both frontend and backend.
•	Node.js: A JavaScript runtime for building server-side applications.
•	Express.js: A web framework for Node.js.
•	MongoDB: A NoSQL database for storing data.
•	JWT (JSON Web Tokens): For authentication and authorization.
•	Bcrypt: A library for hashing passwords.
•	Backend Authentication: Secure user authentication and authorization mechanisms.

# Features:
Although I couldn't implement all the features due to time constraints, the following are in place:
•	Backend Authentication: Secure user authentication and authorization.
•	Error Handling: Robust backend error handling.
•	Password Hashing: Secure password storage using Bcrypt.
•	JWT Tokens: Creation of JWT tokens for authentication.
•	Database Seeder: Enables data seeding to/from MongoDB using seeder.js. Commands:
o	$ npm run data:import – Imports all data models to the database.
o	$ npm run data:destroy – Deletes all data models from the database.

# Planned Features:
I am to develop a comprehensive ecommerce application with the following features:
•	Full-featured shopping cart
•	Product reviews and ratings
•	Top products carousel
•	Product pagination
•	Product search functionality
•	User profile with order history
•	Admin product management
•	Admin user management
•	Admin order details page
•	Mark orders as delivered option.
•	Complete checkout process (shipping, payment method, etc.)
•	PayPal / credit card integration
•	Database seeder for products, users, and orders

# Running the Project:
You can run both the frontend and backend simultaneously using the concurrently feature. Commands:
•	$ npm run dev – Runs both frontend and backend.
•	$ npm run server – Runs only the server.
•	$ npm run client – Runs only the frontend.

# Seeding Data:
•	$ npm run data:import – Imports data into MongoDB.
•	$ npm run data:destroy – Deletes data from MongoDB.

# Testing Backend with Postman:
You can test various routes and features using Postman:
General Path:
•	localhost:5000/api/users

Register User:
•	Method: POST
•	Endpoint: localhost:5000/api/users
•	Description: Create a new user by providing name, email, and password. Custom error handlers validate fields and guide you in case of errors. Successful registration creates a JWT cookie and hashes the password.

Login User:
•	Method: POST
•	Endpoint: localhost:5000/api/users/login

Logout User:
•	Method: POST
•	Endpoint: localhost:5000/api/users/logout

# Future Plans:
I am committed to transforming this project into a fully functional ecommerce application for my Embroidery Business. Upon completion, I plan to host and deploy it, incorporating all planned features and potentially more. I look forward to showcasing this project as a testament to my skills and dedication.

Feel free to reach out for any questions or further information about Atif OnlineShop.
