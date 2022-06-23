const express = require('express');
const path = require('path');
const {MongoClient} = require('mongodb');
const database = require("./database.js");
const app = express();
const PORT = 9090;

async function main() {
  const uri = "mongodb+srv://admin:gEGltGyHIytiFsVP@cluster0.ywcfmvc.mongodb.net/?retryWrites=true&w=majority"
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await database.listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'))
})

app.use('/assets', express.static(path.join(__dirname, '../public')))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})