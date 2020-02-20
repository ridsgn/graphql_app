const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const uri =
	'mongodb+srv://rizuki96:linkinmeteora99@cluster0-4arkx.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
client.connect(err => {
	const collection = client.db('test').collection('devices');
	// perform actions on the collection object
	client.close();
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(4000, () => {
	console.log('now listening for requests on port 4000');
});
