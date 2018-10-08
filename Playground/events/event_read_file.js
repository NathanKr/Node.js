const fs = require('fs');
const rs = fs.createReadStream('./somefile.txt');
const openHandler = () => console.log('The file is open');
rs.on('open', openHandler);