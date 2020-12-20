const express = require('express')
const router = express.Router()
const models = require('../models')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

router.post('/registration', async (req, res) => {
    const user = req.body
    console.log(user)
    const answer = await models.Users.findOne({ email: user.email })
    if (!answer) {
        const hash = bcrypt.hashSync(user.password, null)
        console.log(user)
        const newUser = new models.Users({
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: hash,
            admin: user.admin,
        })
        await newUser.save()
        const token = jwt.sign({ foo: 'bar' }, 'shhhh')
        res.status(200).json({
            ok: true,
            token,
            ...user,
        })
    } else {
        res.status(200).json({
            ok: false,
            messege: 'Имя занято',
        })
    }
})

router.post('/login', (req, res) => {
    const user = req.body

    models.Users.findOne({ email: user.email }).then(answer => {
        console.log(answer)
        if (answer) {
            const match = bcrypt.compareSync(user.password, answer.password)

            if (match) {
                const token = jwt.sign({ foo: 'bar' }, 'shhhh')
                res.status(200).json({
                    ok: true,
                    token,
                    ...answer._doc,
                })
            } else {
                res.status(200).json({
                    ok: false,
                    messege: 'Пароли не совпадают',
                })
            }
        } else {
            res.status(200).json({
                ok: false,
                messege: 'Нет пользователя',
            })
        }
    })
})

module.exports = router
