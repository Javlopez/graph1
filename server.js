let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
    hello: () => {
      return 'Hello world!';
    },
  };


  const app =  express();

  app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
  }));

  app.listen(4000);
  console.log('Running a GraphQL API server at localhost:4000/graphql');


