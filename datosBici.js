const fs = require('fs');
const bicis = fs.readFileSync('bicicletas.json', 'utf8');
const dataBicis = JSON.parse(bicis);
// console.log(dataBicis);
module.exports = dataBicis

