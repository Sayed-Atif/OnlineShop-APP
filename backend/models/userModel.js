import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }, 
}, 
{ 
    timestamps: true    // created at and updated at time will be added in database 
}
)

//@desc  Method to check if password is correct or not
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


//@desc  Method to encrypt password
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next()
    }

    const salt = await bcrypt.genSalt(10)   
    //salt is used to encrypt the password. 10 is the number of rounds for hashing the password

    this.password = await bcrypt.hash(this.password, salt)
    //@desc  Method to encrypt password using bcrypt
})


const User = mongoose.model("User", userSchema);

export default User