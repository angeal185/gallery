const fs = require('fs');

fs.readdir('./', function(err,files){
  if(err){return console.log(err);}

  console.log(JSON.stringify(files));
  
})
