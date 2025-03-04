const mongoose = require('mongoose');
const dbConnnection = () => {
    mongoose.connect(process.env.DB_URI).then ((conn) => {
        console.log(`Connected to MongoDB ${conn.connection.host}`);
        })
        .catch((err) => {
            console.error (`Database  Error:${err}`);
            process.exit(1);   
        });
};
module.exports = dbConnnection;