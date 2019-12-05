const express = require('express')
const clueRouter = express.Router()
const Clue = require('../models/Clue')

clueRouter.route('/')
    .get ((req, res) => {
        Clue.find((err, clues) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(clues)
        })
    })
    .post((req, res) => {
        const newClue = new Clue(req.body)
        newClue.save(err => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(newClue)
        })
    })

clueRouter.route('/:_id')
    .get((req, res) => {
        Clue.findById(req.params._id, (err, clues) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(clues)
        })
    })

    .put((req, res) => {
        Clue.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err, clue) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(clue)
        })
    })

    .delete((req, res) => {
        Clue.findByIdAndRemove(req.params._id, (err, clue) => {
            if (err) {
                return res.status(500).send(err)
            }
            const response = {
                message: "Clue successfully deleted",
                id: clue._id
            }
            return res.status(200).send(response)
        })
    })


module.exports = clueRouter