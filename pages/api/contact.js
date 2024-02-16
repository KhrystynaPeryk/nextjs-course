import { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === 'POST') {
        const {email, name, message} = req.body

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({message: 'Invalid Input'})
            return
        }

        const newMessage = {
            email,
            name,
            message
        }

        let client
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.xq5tlgk.mongodb.net/?retryWrites=true&w=majority`
        try {
            client = await MongoClient.connect(connectionString)
        } catch(e) {
            res.status(500).json({message: 'Could not connect to database'})
        }
        
        const db = client.db(process.env.mongodb_database)

        try {
            const result = await db.collection('messages').insertOne(newMessage)
        } catch(e) {
            client.close()
            res.status(500).json({message: 'Storing message failed...'})
            return
        }

        client.close()
        res.status(201).json({message: 'Successfully stored message!'})
    }
}

export default handler