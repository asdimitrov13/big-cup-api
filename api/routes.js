const controller = require("./controller");

function routes(server) {
  server.get("/locations", controller.getLocations);
  server.get("/location/:id/products", controller.getProductsByLocation);
  server.get("/stock", controller.getProductStockAtLocation);
  server.get("/:id/add-product", controller.addProductToBasket);
  server.get("/checkout", controller.checkout);

}

module.exports = routes;
