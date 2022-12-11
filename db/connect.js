const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to MongoDB Atlas.
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

mongoose.set('strictQuery', true);

module.exports = mongoose.Connection;