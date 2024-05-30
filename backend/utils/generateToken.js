import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' })


    //@Set jwt as HTTP Only Cookie

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development' ,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        // path: '/api/users/login',
        // domain: 'localhost',
    })

    // return token
}


export default generateToken