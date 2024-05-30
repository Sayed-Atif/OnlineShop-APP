import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import User from "./models/userModel.js";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import orders from "./data/orders.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {  // this function is used to import data to database from data folder 
    try {
        await Order.deleteMany();        // delete all data from database 
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);   // insert data from data folder to database
        const adminUser = createdUsers[0]._id;               // get admin user id from database and store in adminUser variable

        // const createdOrders = await Order.insertMany(orders); // insert orders data from data folder to database

        const sampleProducts = products.map((product) => {   // get all products and map it to store in sampleProducts variable
            return { ...product, user: adminUser };         // add adminUser to each product and store in sampleProducts variable 
        });

        await Product.insertMany(sampleProducts);                  // insert sampleProducts to database  
        console.log("Data Imported To Database!".green.inverse);   // print success message in green color in console 
        process.exit();                                            // exit process with success code 

    } catch (error) {
        console.error(`${error}`.red.inverse);             // print error message in red color in console
        process.exit(1);                                   // exit process with error code 
    }
};

const destroyData = async () => {     // this function is used to destroy data from database pushed from data folder
    try {
        await Order.deleteMany();      // delete all order data from database
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed From Database!".red.inverse);  // print success message in red color in console
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {         // if process.argv[2] is -d then call destroyData function else call importData function
    destroyData();                       // argument -d is used to destroy data from database
} else {
    importData();
}


// console.log(process.argv)

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}

