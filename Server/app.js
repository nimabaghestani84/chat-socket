import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import { app } from './Socket/index.js'
import { fileURLToPath } from 'url'
import HandleError from './Utils/handleError.js'
import catchError from './Utils/catchError.js'

const __filename=fileURLToPath(import.meta.url)
export const __dirname =path.dirname(__filename)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('Public'))
app.use(cors())

app.use('*',(req,res,next)=>{
return next(new HandleError('route not found',404))
})
app.use(catchError)

export default app