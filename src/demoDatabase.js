const { MongoClient } = require('mongodb');

const url = "mongodb+srv://sachinkumar1:bKVic4z1NOEykutK@namastenode1.msmrwbs.mongodb.net/"
const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data = {
    firstName: "Ranveer",
    lastName: "Singh",
    city: "Mumbai",
    phoneNumber: "6738939933"
  }

  const insertResults = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResults);

  const insertResult = await collection.insertOne(data);
//   console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  const countResults = await collection.countDocuments({});
  console.log("Count of documents in the User collection =>", countResults)

//Find all documents with a filter of firstName: Deepika

const result = await collection.find({firstName: "Deepika"}).toArray();
console.log("result =>", result) 

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());