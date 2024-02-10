import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-so1ztcr-shard-00-00.srqwonm.mongodb.net:27017,ac-so1ztcr-shard-00-01.srqwonm.mongodb.net:27017,ac-so1ztcr-shard-00-02.srqwonm.mongodb.net:27017/?ssl=true&replicaSet=atlas-o680dt-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URI, {useNewUrlParser: true});
        console.log("database connected successfully");
    }
    catch (err) {
        console.error( "Error connecting to database ", err.message);
    }
}
export default Connection;



// FalgunLegionv1
// FalgunLinuxv1

// const { MongoClient, ServerApiVersion } = require('mongodb');

// import {MongoClient} from "mongodb";
// import {ServerApiVersion} from "mongodb";
// const uri = "mongodb+srv://LegionUser:27hKckZysvyLbXCK@greymail.qrifysk.mongodb.net/?retryWrites=true&w=majority";
// const URI = ``
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     await client.close();
//   }
// }

// // Exporting the `run` function as the default export
// export default run;
