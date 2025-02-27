import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this is set in your environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
      await client.connect();
      const database = client.db('contacts'); // Replace with your database name
      const collection = database.collection('contacts'); // Replace with your collection name

      // Insert the contact message into the collection
      const result = await collection.insertOne({ name, email, subject, message, date: new Date() });

      res.status(200).json({ success: 'Message stored successfully!', id: result.insertedId });
    } catch (error) {
      console.error('Error storing message:', error);
      res.status(500).json({ error: 'Failed to store message' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 