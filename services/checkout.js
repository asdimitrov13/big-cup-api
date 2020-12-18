const request = require("request");
const config = require("../config");

exports.checkout = (checkoutData, res) => {
  const options = {
    uri: config.paymentUrl + "create-payment",
    method: "POST",
    data: checkoutData,
    json: true,
  };

//   request(options).then((response) => {
//     console.log(response);
//     res.status(200);
//   });
  res.json(checkoutData)
};
