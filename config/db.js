const mongoose = require("mongoose");
const config = require("config");
const localDb = config.get("localMongoURI");

const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        if(process.env.NODE_ENV === 'production') {
            await mongoose.connect(db, {
                    useNewUrlParser:true,
                    useCreateIndex:true,
                    useFindAndModify:false
            });
            console.log("``Connected to database"+ db +" with mongoclient succesfully");
        }else {
            await mongoose.connect(localDb, {
                useNewUrlParser:true,
                useCreateIndex:true,
                useFindAndModify:false
            });
            console.log("``Connected to database"+ localDb +" with mongoclient succesfully");
        }        
    }catch(err) {
        console.log(err);
        console.log("Error occured connecting to Database");
        process.exit(1);
    }
};

module.exports= connectDB;



