import mongoose from "mongoose";
import server from './Socket'
import dotenv from "dotenv"
import { server } from "./Socket/index.js";
dotenv.config({path:'./config.env'})

mongoose.connect(process.env.DATABASE_URL).then(()=>console.log('DB IS CONNECTED')).catch(err=>console.log(err))
const port = process.env.PORT || 5001
server.listen(port,()=>console.log(`Server is running on port ${port}`))