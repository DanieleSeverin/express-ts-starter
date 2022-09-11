import * as mongoDB from 'mongodb';
import { WithId } from 'mongodb';
import { logError } from '../logger/logErrors';
import { User } from '../models/Auth';
const { MongoClient } = mongoDB;

//Get user by email
export async function getUserByEmail(email: string) :Promise<User | null>{
    const url = process.env.MONGODB_URL!;
    const client = new MongoClient(url);
    const dbName = process.env.MONGODB_NAME;

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('users');
        const query = { email: email };
        const document :WithId<mongoDB.Document> | null = await collection.findOne(query);
        const user :User = {
            id: document?._id.toString(),
            email: document?.email,
            password: document?.password
        } 
        
        return document ? user : null;
    } catch (err :any) {
        console.log(err.stack);
        logError(err);
        return null;
    }
    finally {
        await client.close();
    }
}