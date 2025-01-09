Here’s a sample **README** file for your OLX clone project, including both backend and frontend features such as adding products, viewing products, login, and logout:

---

# OLX Clone Project

## Overview

This is an OLX clone project that replicates the features of the popular classified ads platform. It includes both a backend and frontend, allowing users to:

- Register and login
- Add products (items for sale)
- View products
- Logout

The project uses modern web technologies including Node.js for the backend and React.js for the frontend.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Uploads**: Multer
- **Deployment**: Heroku / DigitalOcean (optional)
- **Cloud Storage**: Cloudinary for image uploads

## Features

### Backend

1. **User Authentication**
   - Register a new account
   - Login with email and password
   - Logout functionality with token invalidation

2. **Product Management**
   - Add new products (title, description, price, category, and image)
   - View all products
   - Edit or remove your own products

3. **Product Search**
   - Search for products by category or keywords
   - Filter results based on price, category, and location

4. **Image Upload**
   - Upload product images using Multer and store them on Cloudinary

### Frontend

1. **User Authentication**
   - Register, login, and logout functionality with forms and JWT tokens

2. **Product Views**
   - Display a list of all products with pagination
   - View individual product details with images

3. **Add Product**
   - Form for adding new products with title, description, price, and category
   - Image upload for product photos

4. **Responsive Design**
   - Fully responsive for mobile and desktop views

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/olx-clone.git
   cd olx-clone/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` folder and set the following:

     ```
     MONGO_URI=your_mongo_db_uri
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_URL=your_cloudinary_url
     ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will run at `http://localhost:5000`.

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/olx-clone.git
   cd olx-clone/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables for the frontend:

   - Create a `.env` file in the `frontend` folder and set the following:

     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

4. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run at `http://localhost:3000`.

## Usage

1. **Register a new account**:
   - Go to the login page and click on **Register** to create an account.

2. **Login**:
   - After registration, log in with your credentials.

3. **Add a new product**:
   - Once logged in, navigate to the product management page and click **Add Product**. Fill in the details and upload images.

4. **View Products**:
   - Navigate to the product listing page to see all available products. Click on any product to view its details.

5. **Logout**:
   - Click on **Logout** to end your session and clear your authentication token.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in with email and password.
- `GET /api/auth/logout`: Log out the current user.

### Products

- `GET /api/products`: Get all products.
- `POST /api/products`: Add a new product (requires authentication).
- `PUT /api/products/:id`: Edit a product (requires authentication).
- `DELETE /api/products/:id`: Delete a product (requires authentication).
- `GET /api/products/:id`: Get a single product by ID.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request.

---