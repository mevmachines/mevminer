const fs = require('fs');
const data = JSON.parse(fs.readFileSync('metadata.json', 'utf8'));
console.log(`## ${data.software}`)
console.log()
console.log(
    Object.keys(data.services)
        .map(key => {
            const s = data.services[key]
            return `* ${s.name} ${s.version}`
        })
        .join('\n')
);
console.log()
