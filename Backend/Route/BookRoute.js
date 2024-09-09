import express from 'express'
import { getBook } from '../Controller/BookController.js'

const route = express.Router()

route.get("/",getBook)
export default route;