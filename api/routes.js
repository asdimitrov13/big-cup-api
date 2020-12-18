const controller = require("./controller");

function routes(server) {
  server.get("/locations", controller.getLocations);
  server.get("/location/:id/products", controller.getProductsByLocation);
  server.get("/stock", controller.getProductStockAtLocation);
  server.post("/:id/add-product", controller.addProductToBasket);
  server.post("/checkout", controller.checkout);

}

module.exports = routes;
