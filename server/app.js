const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;

const app = express();

var host =
	'mongodb+srv://rizuki96:linkinmeteora99@cluster0-4arkx.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(host, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
mongoose.set('useCreateIndex', true);

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
