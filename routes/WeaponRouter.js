const express = require('express')
const weaponRouter = express.Router()
const Weapon = require('../models/Weapon')

weaponRouter.route('/')
    .get ((req, res) => {
        Weapon.find((err, weapons) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(weapons)
        })
    })
    .post((req, res) => {
        const newWeapon = new Weapon(req.body)
        newWeapon.save(err => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(newWeapon)
        })
    })

weaponRouter.route('/:_id')
    .get((req, res) => {
        Weapon.findById(req.params._id, (err, weapons) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(weapons)
        })
    })

    .put((req, res) => {
        Weapon.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err,weapon) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(weapon)
        })
    })

    .delete((req, res) => {
        Weapon.findByIdAndRemove(req.params._id, (err, weapon) => {
            if (err) {
                return res.status(500).send(err)
            }
            const response = {
                message: "Weapon successfully deleted",
                id: weapon._id
            }
            return res.status(200).send(response)
        })
    })




module.exports = weaponRouter