const express = require("express");
const Product = require("../modules/product");
const productRouter = express.Router();

//post
productRouter.post("/add", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const result = await newProduct.save();
    res.status(200).send({ product: result, msg: "produnct is added" });
  } catch (error) {
    res.status(400).send({ msg: "product is not added" });
  }
});

//getall
productRouter.get("/all", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).send({ product: result, msg: "all product" });
  } catch (error) {
    res.status(400).send({ msg: "can not find product" });
  }
});
//get by id
productRouter.get("/all/:id", async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    res.status(200).send({ product: result, msg: `${result.title} product` });
  } catch (error) {
    res.status(400).send({ msg: "can not find product by id" });
  }
});
//delete
productRouter.delete("/delete/:id", async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "product deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete product" });
  }
});
//put
productRouter.put("/update/:id", async (req, res) => {
  try {
    const result = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send({ Response: result, message: "Product updated" });
  } catch (error) {
    res.status(400).send({ message: `can not update this Product` });
  }
});

//delete all
productRouter.delete("/:title", async (req, res) => {
  try {
    const result = await Product.findAndRemove({
      id:req.params.id,
      title:req.params.title
    });
    res.status(200).send({ msg: "all product deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete product" });
  }
});
module.exports = productRouter;
