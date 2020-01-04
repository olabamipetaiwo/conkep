const mongoose = require("mongoose");
const config = require("config");
//const config =require("./config");
// const localDb = config.localMongoURI;
// const db = config.mongoURI;
const localDb = config.get("localMongoURI");
 const db = config.get("mongoURI");

const connectDB = async () => {
    try {
<<<<<<< HEAD
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
=======
       //await mongoose.connect(localDb, {
         await mongoose.connect(db, {
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false
        });


        console.log("``Connected to database"+db+" with mongoclient succesfully");
>>>>>>> parent of 4c3b8f2... CSS transition Group Added
    }catch(err) {
        console.log(err);
        console.log("Error occured connecting to Database");
        process.exit(1);
    }
};

module.exports= connectDB;



