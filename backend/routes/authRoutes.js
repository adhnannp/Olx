const express = require("express");
const { registerUser, loginUser,addProduct,listProduct,getProduct } = require("../controllers/authController");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const upload = require("../config/multerConfig");

router.post("/register",isLoggedIn,registerUser);
router.post("/login",isLoggedIn,loginUser);
router.post('/add-product',upload.single("image"),addProduct)
router.get('/products',listProduct)
router.get('/product/:id',getProduct)

module.exports = router;
