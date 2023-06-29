const mongoose = require("mongoose");

const dbConnect =async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }
        )   
        console.log('db is conencted') 
    } 
    catch (error) {
        throw new Error(error);
    }
}

module.exports = dbConnect;