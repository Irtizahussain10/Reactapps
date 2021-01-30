const { ApolloServer, gql } = require("apollo-server");

//Defining the schema

const students = [
    {
        id: "1",
        name: "Irtiza",
        email: "irtizahussain221@gmail.com",
    },
    {
        id: "2",
        name: "Irtiza",
        email: "irtizahussain221@gmail.com",
    },
    {
        id: "3",
        name: "Irtiza",
        email: "irtizahussain221@gmail.com",
    },
];

const typeDefs = gql`
type Student {
    id: String!
    name: String
    email: String
}
 
type Query {
    students: [Student]! 
}
`;

const resolvers = {
    Query: {
        students: () => students
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});