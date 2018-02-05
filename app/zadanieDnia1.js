//Twój kod
const fs = require('fs');
const crypto = require('crypto');

let input = process.argv.slice(2)[0];

fs. readFile(input, 'utf8', (err, data)=> {
    if (err === null) {
        console.log("Read file success!")

        const hash = crypto.createHmac('sha256', data)
        .digest('hex');
        console.log(hash);
    }
    else {
        console.log("Unable read file", err)
    }
})