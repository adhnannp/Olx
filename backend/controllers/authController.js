const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Product = require("../models/productModel");

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);

    res.status(201).json({ token, user: { id: user._id, username, email } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (password !== user.password)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    res
      .status(200)
      .json({ token, user: { id: user._id, username: user.username, email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, location } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const advertisement = new Product({
      title,
      description,
      price,
      location,
      imageUrl: image.path,
      imageId: image.filename,
    });

    await advertisement.save();

    console.log("Advertisement saved:", advertisement);
    res.status(201).json({ message: "Advertisement created", advertisement });
  } catch (error) {
    console.error("Error uploading advertisement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.listProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ massage: "Failed to fetch Products" });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Product" });
  }
};
