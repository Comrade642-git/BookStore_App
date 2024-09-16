import Book from "../Models/book.model.js"

const getallBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
}
export default getallBook;