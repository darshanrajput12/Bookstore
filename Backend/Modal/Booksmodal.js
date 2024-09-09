import mongoose from 'mongoose'

const bookscheme = mongoose.Schema({
    name:String,
    category:String,
    cost:Number,
    img:String,
    author:String,
})

const Book = mongoose.model("Book", bookscheme);

export default Book;