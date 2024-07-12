import mongoose from "mongoose";
import { Property } from "../models/listing";

export const connectDb = async () => {

    try{

        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "PropertyDb"
        });

        console.log('db connected');

    }catch(error){

        console.log('failed to connect with database');
        console.log(error);
    }

}