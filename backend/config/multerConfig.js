const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("./cloudinaryConfig");


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "advertisements",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

module.exports = upload;
