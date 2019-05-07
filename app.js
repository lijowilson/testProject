console.log('This is inside app.js');
const index = require('mask-js');

const testSamples = '1234567890';

console.log('The masked Phone value is '+index.maskUSPhoneNumber(testSamples));


