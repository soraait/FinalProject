import dotenv from "dotenv"
dotenv.config()
import  express from "express";
import server from "./server"
import mongoose from "mongoose";



const {DB_USER , DB_PASSWORD , DB_NAME , PORT} = process.env
// const DB_USER="Soraait"
// const DB_PASSWORD="M0pxUXTT29mjbEzv"
// const DB_NAME="FinalProject"
// const PORT=4444

  const createServer = async () => {
    try {
      
      await  mongoose.connect(`
          mongodb+srv://${DB_USER}:${DB_PASSWORD}@graphql-basic.eduoc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
          { useUnifiedTopology: true }
      )

  const app = express()

  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  )
      
    } catch (error) {
      console.log(error)
    }
  }

  
createServer()