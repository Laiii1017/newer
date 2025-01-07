//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var path = require("path");

//web root
server.use(express.static(__dirname));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var Character1DB = DB.create(__dirname+"/character1.db");
var Character2DB = DB.create(__dirname+"/character2.db");
var Character3DB = DB.create(__dirname+"/character3.db");
 

 /*Character1DB.insert([
    {text:"Z.Z的室友，童心未泯的個性常引發很多趣事，是一個樂天的宅貓。"},
 ])*/

 Character2DB.insert([
    {text:"ZIZONE的屋主，是一個認真生活，勤勞工作的上班族。"},
 ])

 Character3DB.insert([
    {text:"PINGO跟Z.Z的好朋友，是個不善與人交際但對人生充滿夢想的小夥伴。"},
 ])


server.get("/character1", (req,res)=>{
      //DB
      Character1DB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})

server.get("/character2", (req,res)=>{
    //DB
    Character2DB.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})

server.get("/character3", (req,res)=>{
    //DB
    Character3DB.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})


server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/webdesign.html'));
});