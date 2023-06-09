const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/test", (req, res, next) => {
    res.send("Book routing test");
});

router.get("/", (req, res, next) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) =>
            res.status(404).json({
                message: err.message,
                success: false,
            })
        );
});

router.post("/", (req, res) => {
    Book.create(req.body)
        .then((book) => res.json({ msg: "Book added successfully", success: true }))
        .catch((err) => res.status(400).json({ error: "Unable to add this book" }));
});

router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ nobookfound: "No Book found" }));
});

router.put("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((book) =>
            res.json({
                msg: "Book updated successfully",
                success: true,
            })
        )
        .catch((err) =>
            res.status(400).json({
                message: err.message,
                success: false,
            })
        );
});
router.delete("/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then((book) => res.json({ mgs: "Book entry deleted successfully" }))
        .catch((err) => res.status(404).json({ error: "No such a book" }));
});

module.exports = router;
