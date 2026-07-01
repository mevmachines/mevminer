const fs = require('fs');
const data = JSON.parse(fs.readFileSync('metadata.json', 'utf8'));
console.log(`${data.software} metadata:`)
console.log(data);
