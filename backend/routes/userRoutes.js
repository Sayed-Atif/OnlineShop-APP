import express from 'express'
// import Product from '../models/productModel.js'
// import products from '../data/products.js'
import asyncHandler from '../middleware/asyncHandler.js';
// import {protect, admin} from '../middleware/authMiddleware.js'
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    // createUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js'

const router = express.Router()


//@desc    Auth/Login user & get token
//@route   POST /api/users/login
//@access  Public
router.route('/login').post(authUser)
// Already existing user is able to login in the application


//@desc    Register/create a new user & generate jwt token
//@route   POST /api/users
//@access  Public
router.route('/').post(registerUser)
// Any new user is able to register in the application


//@desc    Logout user & remove token
//@route   POST /api/users/logout
//@access  Private
// router.route('/logout').post( protect, logoutUser)
router.route('/logout').post(logoutUser)
//protect route to logout already logged user and remove token


//@desc    Get user profile
//@route   GET /api/users/profile
//@access  Private
// router.route('/profile').get( protect, admin, getUserProfile)
router.route('/profile').get(getUserProfile)
// protect route to get already logged user profile details from token 


//@desc    Update user profile
//@route   PUT /api/users/profile
//@access  Private
// router.route('/profile').put( protect, updateUserProfile)
router.route('/profile').put(updateUserProfile)
// protect route to update already logged user and update profile details from token



/* ------------------------------------------------------------------------------------------------- */

//Admin Routes go here:


//@desc    Get all users
//@route   GET /api/users
//@access  Private/Admin
router.route('/').get(getUsers);
// router.route('/').get( protect, getUsers);
// protect route to get all users with admin credentials from token

//@desc    Get single user
//@route   GET /api/users/:id
//@access  Private/Admin
// router.route('/:id').get( protect, admin, getUserById);
router.route('/:id').get(getUserById);
// protect route to get a user with admin credentials from token  


// //@desc    Create user
// //@route   POST /api/users
// //@access  Private/Admin
// router.route('/').post( protect, admin, createUser);


//@desc    Update user
//@route   PUT /api/users/:id
//@access  Private/Admin
// router.route('/:id').put( protect, admin, updateUser); 
router.route('/:id').put(updateUser);
// protect route to update user from token with admin credentials


//@desc    Delete user
//@route   DELETE /api/users/:id
//@access  Private/Admin
// router.route('/:id').delete( protect, admin, deleteUser);
router.route('/:id').delete(deleteUser);
// protect route to get user from token and delete user with admin credentials




export default router