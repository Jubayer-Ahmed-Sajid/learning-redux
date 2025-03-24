
import { MongoClient, ServerApiVersion } from 'mongodb';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collectionNameObj = {
    USERS:'users_collection',
    TASKS:'tasks_collection'

}
const dbConnect = (collectionName)=>{
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
 return client.db('TodoDB').collection(collectionName);
}
export default dbConnect;

