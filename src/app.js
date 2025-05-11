const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const empSchema = require('./modules/employee/emp.schema');

app.use('/graphql', graphqlHTTP({
  schema: empSchema,
  graphiql: true // Enables in-browser GraphQL client
}));

module.exports = app;
