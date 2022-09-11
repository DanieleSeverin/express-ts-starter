import * as mongoDB from 'mongodb';
import { logError } from '../logger/logErrors';
const { MongoClient } = mongoDB;

//Get user by email
export async function getUserByEmail(email: string){
    const url = process.env.MONGODB_URL!;
    const client = new MongoClient(url);
    const dbName = process.env.MONGODB_NAME;

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('users');
        const query = { email: email };
        const user = await collection.findOne(query);
        return user;
    } catch (err :any) {
        console.log(err.stack);
        logError(err);
        return null;
    }
    finally {
        await client.close();
    }
}