import React, { useState } from "react";
import { ArrowLeft, Camera, MapPin } from "lucide-react";
import "./AddAdvertisement.css";
import { useNavigate } from "react-router-dom";
import loading_gif from "../../assets/loading.gif";
import {ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast

const AddAdvertisement = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
  });
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split("/")[0];
      if (fileType !== "image") {
        toast.error("Only image files are allowed!");
        setImage(null);
        setPreviewImage(null);
      } else {
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.title.trim()) {
      toast.error("Title cannot be empty or start with a space!");
      setLoading(false);
      return;
    }
    if (!formData.description.trim()) {
      toast.error("Description cannot be empty or start with a space!");
      setLoading(false);
      return;
    }
    if (!formData.location.trim()) {
      toast.error("Location cannot be empty or start with a space!");
      setLoading(false);
      return;
    }
    if (formData.price <= 0 || isNaN(formData.price)) {
      toast.error("Price must be a positive number and cannot be zero or negative!");
      setLoading(false);
      return;
    }
    if (!image) {
      toast.error("Image must be uploaded");
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("location", formData.location);
    if (image) {
      form.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Advertisement created:", result);
        navigate("/");
        toast.success("Advertisement created successfully!");
      } else {
        const result = await response.json();
        console.error("Failed to create advertisement:", result);
        toast.error("Failed to create advertisement. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting advertisement:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-content">
            <img src={loading_gif} alt="Loading..." />
          </div>
        </div>
      )}

      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-5 h-5 mr-1" />
        Back
      </button>

      <form onSubmit={handleSubmit} className="listing-form">
        <div className="form-group">
          <label>
            Ad title <span className="required">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <p className="helper-text">
            Mention the key features of your item (e.g. brand, model, age, type)
          </p>
        </div>

        <div className="form-group">
          <label>
            Description <span className="required">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <p className="helper-text">
            Include condition, features and reason for selling
          </p>
        </div>

        <div className="form-group">
          <label>
            Location <span className="required">*</span>
          </label>
          <div className="location-input">
            <MapPin className="location-icon" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter your location"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>SET A PRICE</label>
          <div className="price-input">
            <span className="currency-symbol">₹</span>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <p className="photos-label">UPLOAD A PHOTO</p>
          <div className="photo-grid">
            <div className="photo-upload-box">
              {previewImage ? (
                <>
                  <img
                    src={previewImage}
                    alt="Uploaded"
                    className="uploaded-image"
                  />
                </>
              ) : (
                <label className="upload-label">
                  <Camera className="camera-icon" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden-input"
                    id="imageInput" // Hidden file input for re-selecting image
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Submitting..." : "Submit Listing"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddAdvertisement;
