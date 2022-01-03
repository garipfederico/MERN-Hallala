const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI
: 'MONGODB_URI=mongodb://localhost/databasetest'

mongoose.connect(URI,{
useNewUrlParser: true,
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});