require('dotenv').config();
const app = require('./app')
require('./database');

//app.listen(4000, () => console.log('server on port 4000'));

async function main() {
    await app.listen(app.get('port'));      //App.get('port') es una variable seteada en app.js Video 4
    console.log('server on port', app.get('port'))
}

main();