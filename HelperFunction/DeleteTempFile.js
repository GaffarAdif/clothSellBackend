const fs = require('fs')


const TempFileDelete = (path)=>{
    fs.unlink(path,(er)=>{console.log(er)})
    }
    
module.exports = TempFileDelete