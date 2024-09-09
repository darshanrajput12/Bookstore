import Book from "../Modal/Booksmodal.js";

export const getBook = async(req, res)=>{
    try {
        const book =await Book.find()
        res.status(200).json(book)
        
    } catch (error) {
        console.log("We couldnt find the book",error)
        res.status(500).json(error)

    }

}