const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isbn: {
        type: Number,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    updated_at : {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
