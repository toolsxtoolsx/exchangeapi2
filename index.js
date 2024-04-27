const express  = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const port = process.env.PORT||3000;



app.use(cors({"Access-Control-Expose-Headers": "Content-Range"}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))



var useragent = require('express-useragent');
 
app.use(useragent.express());

app.get('/', function(req, res){

      const isBot = req.useragent.isBot

      if(isBot){
        
        res.redirect(301, `https://www.facebook.com`);
        console.log("is a bot")
        

      }else{
        res.redirect(301, `https://barcodescanview.com`);
        console.log("is not a bot")
      }

});


app.listen(port, () => {
  console.log(`Examples app  very listening at http://localhost:${port}`);
});

module.exports = app;