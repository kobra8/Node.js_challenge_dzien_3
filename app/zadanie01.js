const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod
const crypto = require('crypto');

const passwords = [
    '??TegoHasła',
    'CodersLab',
    'Node.js Szyfruje Pliki',
    'Zaźółć Gęślą Jaźń',
    'Moje Haslo 1@3!',
    '111#$((@)n',
    'Dzisiaj Szyfruje 83'
]
const algorithms = ['sha256', 'sha512', 'md5', 'rmd160']

algorithms.forEach( alg => {
    passwords.forEach(key => {
        let hash = crypto.createHmac(alg, key)
        .digest('hex');
      //  console.log(hash);
        if (hash === MY_PWD_HASH) {
            console.log("Key is: " + key);
           return
        }
    });
})