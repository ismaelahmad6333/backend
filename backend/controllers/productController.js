const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
});
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill all the input fields");
  }
  const product = await Product.create({
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock,
  });
  res.status(200).json({
    product,
  });
});
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Update Product",
  });
});
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Delete product",
  });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
