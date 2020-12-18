"use strict";

let locationsData = require("../data/locations.json");
let productsData = require("../data/products.json");
let checkoutData = require("../data/checkout.json");
let checkout = require("../services/checkout");
let basket = [];

let controllers = {
  getLocations: (req, res) => {
    res.json(locationsData);
  },
  getProductsByLocation: (req, res) => {
    let locationId = req.params.id;
    let location = locationsData.find((loc) => loc.id === parseInt(locationId));
    const locationProducts = [];
    location.products.forEach((product) => {
      locationProducts.push({
        product: productsData.find(
          (fullProduct) => fullProduct.id === product.productid
        ),
        stock: product.stock,
      });
    });
    res.json(locationProducts);
  },
  checkout: (req, res) => {
    
    checkout.checkout(basket, res);
    basket = [];
  },
  getProductStockAtLocation: (req, res) => {
    const locationId = req.query.locationId;
    const productId = req.query.productId;
    const { products } = locationsData.filter(
      (loc) => loc.id === parseInt(locationId)
    )[0];
    const { stock } = products.filter(
      (product) => product.productid === parseInt(productId)
    )[0];
    res.json({ stock: stock });
  },
  addProductToBasket: (req, res) => {
    const locationId = req.params.id;
    const productId = req.query.productId;
    const qty = req.query.qty;
    const { products } = locationsData.filter(
      (loc) => loc.id === parseInt(locationId)
    )[0];
    const product = products.filter(
      (product) => product.productid === parseInt(productId)
    )[0];
    product.stock = qty;

    basket.push(product);
    const basketData = JSON.stringify(basket, null, 2);
    res.send("Success")
  },
};

module.exports = controllers;
