var express = require('express')
var app = express()
var path=require('path');
var bodyparser=require('body-parser');
var port = process.env.PORT || 3000 ||8080;
app.use(bodyparser.urlencoded({extended:true}));

app.get('/api/whoami', function(req, res){
    
    var reqHeader={ipaddress:"",lang:"",software:""};
    reqHeader.ipaddress=req.headers["x-forwarded-for"];
    reqHeader.lang=req.headers["accept-language"].split(",")[0];
    reqHeader.software=req.headers["user-agent"].split(') ')[0].split(' (')[1];
    res.send(reqHeader);
})

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
