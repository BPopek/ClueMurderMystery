const express = require('express')
const characterRouter = express.Router()
const Character = require('../models/Character')

characterRouter.route('/')
    .get ((req, res) => {
        Character.find((err, characters) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(characters)
        })
    })
    .post((req, res) => {
        const newCharacter = new Character(req.body)
        newCharacter.save(err => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(newCharacter)
        })
    })

characterRouter.route('/:_id')
    .get((req, res) => {
        Character.findById(req.params._id, (err, characters) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(characters)
        })
    })

    .put((req, res) => {
        Character.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err, character) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(character)
        })
    })

    .delete((req, res) => {
        Character.findByIdAndRemove(req.params._id, (err, character) => {
            if (err) {
                return res.status(500).send(err)
            }
            const response = {
                message: "Character successfully deleted",
                id: character._id
            }
            return res.status(200).send(response)
        })
    })

module.exports = characterRouter