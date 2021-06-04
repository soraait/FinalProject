import { GraphQLDateTime } from "graphql-iso-date";

import Query from "./Query";
import Mutation from "./Mutation";
// //fake database
// const users = [
//     {
//         id: "1",
//         name:"salmon"
//     },
//     {
//         id: "2",
//         name:"crap"
//     },
//     {
//         id: "3",
//         name:"sturgeon"
//     },
//     {
//         id: "4",
//         name:"bass"
//     },   
// ]
// const me = users[0]


const resolvers = {
    Query,
    Mutation,
    Date : GraphQLDateTime
}

export default resolvers