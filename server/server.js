const app = require('./src/app');
const connectDB = require('./src/db/db');
require('dotenv').config();


const startServer = async () => {

    // importing port number from .env file
    const PORT = process.env.PORT || 5000;

    // calling function to coonnect to mongoDB
    await connectDB();
    
    // starting the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer();