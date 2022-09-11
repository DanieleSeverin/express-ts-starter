import * as mongoDB from 'mongodb';
import { logError } from '../logger/logErrors';
import { User } from '../models/Auth';
const { MongoClient } = mongoDB;

//Get user by email
export async function addUser(user: User){
    const url = process.env.MONGODB_URL!;
    const client = new MongoClient(url);
    const dbName = process.env.MONGODB_NAME;

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('users');
        await collection.insertOne(user);
    } catch (err :any) {
        console.log(err.stack);
        logError(err);
    }
    finally {
        await client.close();
    }
}