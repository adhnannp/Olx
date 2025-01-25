const jwt = require('jsonwebtoken')

const isLoggedIn = (req,res,next)=>{
    const token =  req.headers.authorization?.split(" ")[1];
    if(!token){
        return next();
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(400).json({ message: "User already logged in" });
    } catch (error) {
        return next();
    }
};
    
module.exports = isLoggedIn;