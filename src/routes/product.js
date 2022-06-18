const express = require('express')
const productSchema = require('../models/product')

const router = express.Router()


router.get('/products', (req, res) => {
    productSchema.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
})

router.get('/products/:id', (req, res) => {
    productSchema.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json(err))
})

router.post('/products', (req, res) => {
    productSchema(req.body)
        .save()
        .then(data => res.json(data))
        .catch(err => res.json({ message: err.message }))
})

router.put('/products/:id', (req, res) => {
    productSchema.findByIdAndUpdate(req.params.id, req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
})

router.patch('/products/:id', (req, res) => {
    productSchema.findByIdAndUpdate(req.params.id, req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
})

router.delete('/products/:id', (req, res) => {
    productSchema.findByIdAndDelete(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json(err))
})




module.exports = router;