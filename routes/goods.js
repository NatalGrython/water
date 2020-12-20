const express = require('express')
const router = express.Router()
const models = require('../models')

router.post('/add', (req, res) => {
    console.log(req.body)
    models.Goods.findOne({ user: req.body.user }).then(async el => {
        if (!el) {
            const Goods = new models.Goods({
                user: req.body.user,
            })
            await Goods.product.push(req.body.product)
            await Goods.save()
        } else {
            await el.product.push(req.body.product)
            await el.save()
        }
    })

    res.status(200)
})

router.post('/get', async (req, res) => {
    const data = await models.Goods.findOne({ user: req.body.user })
    if (data) {
        res.status(200).json({
            product: data.product,
        })
    }
    res.status(200)
})

router.post('/order/set', async (req, res) => {
    const data = await models.Goods.findOneAndDelete({ user: req.body.user })

    const newOrder = new models.Order({
        email: req.body.user,
        products: req.body.data,
    })
    await newOrder.save()
    res.status(200).json({
        ok: true,
    })
})

router.post('/order/get', async (req, res) => {
    const data = await models.Order.find({ email: req.body.email })
    console.log(data)
    if (data) {
        res.status(200).json({
            result: data,
        })
    }
})

router.post('/order/all', async (req, res) => {
    console.group('work')
    const data = await models.Order.find({})
    console.log(data)
    res.status(200).json({
        data: data,
    })
})

module.exports = router
