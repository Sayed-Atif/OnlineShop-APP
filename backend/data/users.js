import bcrypt from "bcryptjs";
// import bcryptjs from "bcryptjs";


const users = [ 

    {
        name: 'Sayed Atif',
        email: 'UZwzK@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: '5bKpK@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'j5bKpK@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];



export default users