const Rating = require("../models/rating_model.js");
const productService=require("../services/product_service.js")

async function createRating(req, user) {
  const product = await productService.findProductById(req.productId)
  
  const rating = new Rating({
    product: product._id,
    user: user._id,
    rating: req.rating,
    createdAt: new Date(),
  });
  
  return await rating.save();
}

async function getProductsRating(productId) {
  return await Rating.find({ product: productId });
}



module.exports = {
  createRating,
  getProductsRating,
};
