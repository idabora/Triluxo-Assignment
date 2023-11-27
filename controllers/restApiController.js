const express = require('express');
const Book = require('../models/bookModel');
const app = express();

module.exports.getBook = async (req, res) => {

    const { bookId } = req.body;
    let book;

    if (bookId) {
        book = await Book.findById(bookId);
        console.log(book);
    } else {
        book = await Book.find();
    }

    if (!book.length || !book) {
        return res.status(400).json({
            message: "Book Doesn't Exist"
        });
    }

    res.status(200).json({
        message: "Success",
        Book: book
    })

}

module.exports.addBook = async (req, res) => {
    let { title, author, genre, pageCount } = req.body;
    title = title ? title.trim() : " ";
    if (!title) {
        return res.status(400).json({
            message: "Please pass the title"
        })
    }

    const book = await Book.findOne({ title });

    if (book) {
        res.status(422).json({
            message: "This Book Already Exist in The Library"
        })
    }

    const obj = await Book.create({
        title, author, genre, pageCount
    });

    res.status(201).json({
        message: 'Success',
        Book: obj
    });

}

module.exports.updateBook = async (req, res) => {

    let { title, author, pageCount, genre, bookId } = req.body;
    if (title || author || genre || pageCount) {
        const book = await Book.findByIdAndUpdate(bookId, {
            $set: {
                title, author, genre, pageCount
            }
        }, { new: true })
        console.log(book)
        res.status(200).json({ "Book": book })
    }

    return res.status(400).json({
        message: "Please pass any field that you want to edit title / author / genre / pageCount"
    })


}

module.exports.removeBook = async (req, res) => {
    let { bookId, title } = req.body;
    if (title || bookId) {
        const book = await Book.findOneAndDelete({ $or: [{ title: title }, { _id: bookId }] }, { new: true });

        console.log(book)

        return res.status(200).json({ Book: book });
    }

    return res.status(400).json({
        message: "Please pass title / bookId"
    })
}