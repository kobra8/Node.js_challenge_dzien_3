const crypto = require('crypto');

const text = "Hello World!";

// Create hash
const hash = crypto.createHmac('sha256', text)
.digest('hex');

console.log(hash);

//Encode string

function encodeText(text, password, algorithm) {
    const cipher = crypto.createCipher(algorithm, password);

    let encrypted = cipher.update(text, 'utf8', 'hex' );
    encrypted += cipher.final('hex');
    return encrypted;
}

console.log(encodeText('Hello World!', '123456', 'aes-256-cbc'));

//Decode string

function decodeText(encodedText, password, algorithm) {
    const decipher = crypto.createDecipher(algorithm, password);

    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

console.log(decodeText('844a85aa25e18f4180a485d48a6ac799', '123456', 'aes-256-cbc'))