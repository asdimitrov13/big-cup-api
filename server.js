let express = require('express')
let app = express();
let port = process.env.PORT || 3000;

let routes = require('./api/routes');
routes(app);
app.listen(port,function(){
  console.log('Server started on port: ' + port);
});