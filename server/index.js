const {ApolloServer} = require("apollo-server");
const{typeDefs} = require('./schema/type-def')
const{resolvers} = require('./schema/resolvers')


const server = new ApolloServer({typeDefs, resolvers});


server.listen().then(({url})=>{

    console.log(`Hello YOUR api is running at :  ${url}`);

})